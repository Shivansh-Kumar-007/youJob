import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { match, P } from "ts-pattern";

const EMAIL_COOKIE_NAME = "yj_user_email";
const EMAIL_COOKIE_SIG_NAME = "yj_user_email_sig";
const COOKIE_MAX_AGE = 30 * 24 * 60 * 60;

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: COOKIE_MAX_AGE,
};

const CLEARED_COOKIE_OPTIONS = {
  ...COOKIE_OPTIONS,
  maxAge: 0,
};

const getCookieSecret = () => {
  const secret = process.env.YJ_COOKIE_SECRET;
  return match({ secret, nodeEnv: process.env.NODE_ENV })
    .with({ secret: P.nullish, nodeEnv: "production" }, () => {
      throw new Error("YJ_COOKIE_SECRET is required");
    })
    .otherwise(({ secret: resolvedSecret }) => resolvedSecret ?? "dev-insecure-cookie-secret");
};

const signEmail = (email: string, secret: string) =>
  createHmac("sha256", secret).update(email).digest("base64url");

const toBase64UrlBuffer = (value: string) => {
  try {
    return Buffer.from(value, "base64url");
  } catch {
    return null;
  }
};

const isValidSignature = (email: string, signature: string, secret: string) => {
  const expected = signEmail(email, secret);
  const signatureBuffer = toBase64UrlBuffer(signature);
  const expectedBuffer = toBase64UrlBuffer(expected);
  return match<[Buffer | null, Buffer | null]>([signatureBuffer, expectedBuffer])
    .with([P.instanceOf(Buffer), P.instanceOf(Buffer)], ([signatureValue, expectedValue]) =>
      match(signatureValue.length === expectedValue.length)
        .with(true, () => timingSafeEqual(signatureValue, expectedValue))
        .otherwise(() => false)
    )
    .otherwise(() => false);
};

export async function setSignedUserEmailCookie(email: string) {
  const secret = getCookieSecret();
  const cookieStore = await cookies();
  const signature = signEmail(email, secret);
  cookieStore.set(EMAIL_COOKIE_NAME, email, COOKIE_OPTIONS);
  cookieStore.set(EMAIL_COOKIE_SIG_NAME, signature, COOKIE_OPTIONS);
}

export async function clearSignedUserEmailCookie() {
  const cookieStore = await cookies();
  cookieStore.set(EMAIL_COOKIE_NAME, "", CLEARED_COOKIE_OPTIONS);
  cookieStore.set(EMAIL_COOKIE_SIG_NAME, "", CLEARED_COOKIE_OPTIONS);
}

export async function readSignedUserEmailCookie() {
  const devEmail = process.env.YJ_DEV_USER_EMAIL;
  if (devEmail && process.env.NODE_ENV !== "production") {
    return devEmail;
  }

  const secret = getCookieSecret();
  const cookieStore = await cookies();
  const email = cookieStore.get(EMAIL_COOKIE_NAME)?.value ?? null;
  const signature = cookieStore.get(EMAIL_COOKIE_SIG_NAME)?.value ?? null;
  return match({ email, signature })
    .with({ email: P.nullish }, () => null)
    .with({ signature: P.nullish }, () => null)
    .otherwise(({ email: resolvedEmail, signature: resolvedSignature }) =>
      match(isValidSignature(resolvedEmail ?? "", resolvedSignature ?? "", secret))
        .with(true, () => resolvedEmail)
        .otherwise(() => null)
    );
}
