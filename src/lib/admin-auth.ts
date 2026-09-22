import "server-only";
import crypto from "node:crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "bb_admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

function sessionToken() {
  return crypto.createHmac("sha256", ADMIN_PASSWORD ?? "").update("bb-admin-session").digest("hex");
}

export function checkPassword(input: string) {
  if (!ADMIN_PASSWORD) return false;
  return input === ADMIN_PASSWORD;
}

export async function isAdminAuthenticated() {
  if (!ADMIN_PASSWORD) return false;
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value === sessionToken();
}

export async function createAdminSession() {
  const store = await cookies();
  store.set(COOKIE_NAME, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
}

export async function destroyAdminSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}
