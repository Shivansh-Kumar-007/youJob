import {
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE,
  type MiddlewareFn,
} from "next-safe-action";
import { match, P } from "ts-pattern";

import { userAccessService } from "./user-access-service";
import { readSignedUserEmailCookie } from "@/lib/server/auth/user-email-cookie";
import { userAccessRepository } from "./user-access-repository";

const getUserEmailFromInput = (clientInput: unknown) =>
  match(clientInput)
    .with(P.nullish, () => null)
    .with(
      P.when((input) => typeof input !== "object"),
      () => null
    )
    .otherwise((input) => {
      const record = input as Record<string, unknown>;
      return match(record)
        .with({ userEmail: P.string }, ({ userEmail }) => userEmail)
        .with({ email: P.string }, ({ email }) => email)
        .otherwise(() => null);
    });

interface ActionCtx {
  userEmail: string | null;
  userId?: string;
}

const AUTH_ERROR_MESSAGES = new Set([
  "Unauthorized",
  "AUTH_MISMATCH",
  "ACCESS_NOT_APPROVED",
]);

const deny = (
  message: "Unauthorized" | "AUTH_MISMATCH" | "ACCESS_NOT_APPROVED"
): never => {
  throw new Error(message);
};

export const actionClient = createSafeActionClient({
  defaultValidationErrorsShape: "flattened",
  handleServerError: (error) => {
    if (AUTH_ERROR_MESSAGES.has(error.message)) {
      return error.message;
    }
    console.error("Action error:", error.message);
    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
}).use(async ({ next }) => {
  const email = await readSignedUserEmailCookie();
  return next({ ctx: { userEmail: email } satisfies ActionCtx });
});

const requireEmailCookie: MiddlewareFn<
  string,
  undefined,
  ActionCtx,
  ActionCtx
> = async ({ clientInput, ctx, next }) => {
  const email = ctx.userEmail ?? null;
  const clientEmail = getUserEmailFromInput(clientInput);
  return match<[string | null, string | null]>([email, clientEmail])
    .with([P.nullish, P._], () => deny("Unauthorized"))
    .with([P.string, P.string], ([emailValue, clientEmailValue]) =>
      match(clientEmailValue === emailValue)
        .with(true, () => next({ ctx: { userEmail: emailValue } }))
        .otherwise(() => deny("AUTH_MISMATCH"))
    )
    .with([P.string, P.nullish], ([emailValue]) =>
      next({ ctx: { userEmail: emailValue } })
    )
    .otherwise(() => deny("Unauthorized"));
};

export const emailActionClient = actionClient.use(requireEmailCookie);

export const authenticatedActionClient = emailActionClient.use(
  async ({ ctx, next }) => {
    const email = (ctx as ActionCtx).userEmail ?? null;
    return match(email)
      .with(P.nullish, () => deny("AUTH_MISMATCH"))
      .otherwise(async (emailValue) => {
        const approved =
          await userAccessService.isUserAccessApproved(emailValue);
        if (!approved) deny("ACCESS_NOT_APPROVED");

        const user = await userAccessRepository.findUserByEmail(emailValue);
        if (!user) deny("Unauthorized");

        return next({ ctx: { userEmail: emailValue, userId: user!.id } });
      });
  }
);
