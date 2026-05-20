import { cookies } from "next/headers";
import { createSupabaseServerClient } from "@/lib/third-party-clients/supabase/server";
import { setSignedUserEmailCookie } from "./user-email-cookie";

export const AUTH_ACCESS_COOKIE = "youjob_access_token";
export const AUTH_REFRESH_COOKIE = "youjob_refresh_token";

export async function setAuthSessionCookies(input: {
  accessToken: string;
  refreshToken: string;
  expiresAt?: number | null;
  email?: string;
}) {
  const cookieStore = await cookies();
  const maxAge =
    typeof input.expiresAt === "number"
      ? Math.max(60, input.expiresAt - Math.floor(Date.now() / 1000))
      : 60 * 60 * 24 * 7;

  cookieStore.set(AUTH_ACCESS_COOKIE, input.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge,
  });

  cookieStore.set(AUTH_REFRESH_COOKIE, input.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  if (input.email) {
    await setSignedUserEmailCookie(input.email);
  }
}


export async function getAccessTokenFromCookies(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_ACCESS_COOKIE)?.value || null;
}

export async function getAuthenticatedUserFromCookies() {
  const accessToken = await getAccessTokenFromCookies();
  if (!accessToken) return null;

  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser(accessToken);
  if (error || !data.user) return null;

  return data.user;
}
