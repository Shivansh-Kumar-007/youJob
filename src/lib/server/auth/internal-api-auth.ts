import { headers } from "next/headers";

export class UnauthorizedError extends Error {
  constructor(message = "Unauthorized") {
    super(message);
    this.name = "UnauthorizedError";
  }
}

export async function assertInternalApiKeyAuth(): Promise<void> {
  const expectedApiKey = process.env.JOB_IMPORT_API_KEY;

  if (!expectedApiKey) {
    throw new UnauthorizedError("Missing JOB_IMPORT_API_KEY on server");
  }

  const requestHeaders = await headers();
  const apiKeyHeader = requestHeaders.get("x-api-key");
  const authorization = requestHeaders.get("authorization");
  const bearerToken = authorization?.startsWith("Bearer ")
    ? authorization.slice("Bearer ".length).trim()
    : undefined;
  const providedApiKey = apiKeyHeader || bearerToken;

  if (!providedApiKey || providedApiKey !== expectedApiKey) {
    throw new UnauthorizedError("Invalid API key");
  }
}
