"use server";

import { Resend } from "resend";
import { site } from "@/lib/site";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || site.email;
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Bricks & Builders <onboarding@resend.dev>";

const SEND_ERROR =
  "Something went wrong sending your message. Please try again or reach us on WhatsApp.";

export type FormActionState = {
  success: boolean;
  error?: string;
};

async function deliverEmail(opts: {
  subject: string;
  replyTo: string;
  lines: Record<string, string>;
  logTag: string;
}) {
  if (!resend) {
    console.log(`[${opts.logTag}] RESEND_API_KEY not set — logging only`, opts.lines);
    return;
  }

  const text = Object.entries(opts.lines)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text,
  });
}

export async function submitInquiry(
  prevState: FormActionState | null,
  formData: FormData
): Promise<FormActionState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const property = formData.get("property")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !phone) {
    return {
      success: false,
      error: "Please share your name and phone number so we can reach you.",
    };
  }

  try {
    await deliverEmail({
      subject: property ? `New inquiry — ${property}` : "New website inquiry",
      replyTo: email || "no-reply@bricksandbuilders.example",
      logTag: "inquiry",
      lines: {
        Name: name,
        Phone: phone,
        Email: email || "Not provided",
        Property: property || "General inquiry",
        Message: message || "(none)",
      },
    });
  } catch (err) {
    console.error("[inquiry] email send failed", err);
    return { success: false, error: SEND_ERROR };
  }

  return { success: true };
}
