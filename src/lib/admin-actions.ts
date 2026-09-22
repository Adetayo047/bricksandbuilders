"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { checkPassword, createAdminSession, destroyAdminSession } from "@/lib/admin-auth";
import { saveProperty } from "@/lib/properties-admin";
import type { PriceTier } from "@/lib/properties";

export type LoginState = { error?: string } | null;

export async function loginAction(prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = formData.get("password")?.toString() ?? "";

  if (!checkPassword(password)) {
    return { error: "Incorrect password." };
  }

  await createAdminSession();
  redirect("/admin/properties");
}

export async function logoutAction() {
  await destroyAdminSession();
  redirect("/admin/login");
}

export type SaveState = { success?: boolean; error?: string } | null;

export async function updatePropertyAction(
  prevState: SaveState,
  formData: FormData
): Promise<SaveState> {
  const slug = formData.get("slug")?.toString();
  if (!slug) return { error: "Missing property slug." };

  const name = formData.get("name")?.toString().trim();
  const location = formData.get("location")?.toString().trim();
  const summary = formData.get("summary")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const status = formData.get("status")?.toString() as "Available" | "Selling Fast" | "Sold Out";
  const priceTiersJson = formData.get("priceTiersJson")?.toString();

  if (!name || !location || !status) {
    return { error: "Name, location, and status are required." };
  }

  let priceTiers: PriceTier[] = [];
  try {
    priceTiers = priceTiersJson ? JSON.parse(priceTiersJson) : [];
  } catch {
    return { error: "Price tiers were malformed — please try again." };
  }

  try {
    saveProperty(slug, { name, location, summary, description, status, priceTiers });
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to save." };
  }

  revalidatePath("/admin/properties");
  revalidatePath(`/admin/properties/${slug}`);
  revalidatePath("/properties");
  revalidatePath(`/properties/${slug}`);
  revalidatePath("/");

  return { success: true };
}
