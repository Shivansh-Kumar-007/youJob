import { ResultAsync } from "neverthrow";
import { userAccessRepository, type UserAccessRepository } from "./user-access-repository";
import { toError } from "@/lib/lang/errors";

export interface UserAccessService {
  isUserAccessApproved(email: string): Promise<boolean>;
}

export const createUserAccessService = (
  dependencies?: Partial<{ repository: UserAccessRepository }>
): UserAccessService => {
  const repository = dependencies?.repository ?? userAccessRepository;

  return {
    isUserAccessApproved: async (email) => {
      if (!email) return false;

      const userResult = await ResultAsync.fromPromise(
        repository.findUserByEmail(email),
        (error) => toError(error, "Failed to fetch user access")
      );

      if (userResult.isErr() || !userResult.value) {
        return false;
      }

      // For now, any user in the DB is approved. 
      // You can add more complex logic here (e.g. checking subscription status)
      return true;
    },
  };
};

export const userAccessService = createUserAccessService();
