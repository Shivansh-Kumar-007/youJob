const INTERNAL_SERVER_ERROR_MESSAGE = "Internal Server Error";

export const toError = (error: unknown, fallbackMessage: string): Error =>
  error instanceof Error ? error : new Error(fallbackMessage);

export const toInternalServerError = (error: unknown): Error =>
  toError(error, INTERNAL_SERVER_ERROR_MESSAGE);
