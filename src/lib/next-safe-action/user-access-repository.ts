import { PlanTier } from "@/generated/client";
import prisma from "@/lib/third-party-clients/prisma-client";

export interface UserAccessRepository {
  findUserByEmail(email: string): Promise<{ id: string; email: string; planTier: PlanTier } | null>;
}

export const createPrismaUserAccessRepository = (): UserAccessRepository => ({
  findUserByEmail: async (email) => {
    return prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        planTier: true,
      },
    });
  },
});

export const userAccessRepository = createPrismaUserAccessRepository();
