import { PrismaClient } from "@/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const connectionString = process.env.DATABASE_URL;

// Create adapter if connection string exists
const adapter = connectionString
  ? new PrismaPg(
      new pg.Pool({
        connectionString,
        idleTimeoutMillis: 30000,
        max: 10,
      })
    )
  : undefined;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
