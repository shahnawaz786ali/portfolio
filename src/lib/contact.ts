import { ContactFormData } from "@/types";
import { siteConfig } from "@/lib/site";

/**
 * Delivery is provider-agnostic by design: this is the single seam to swap
 * from a direct email send to a Django backend endpoint later (e.g. POST to
 * `${DJANGO_API_URL}/api/contact/`) without touching the form or route.
 */
export async function deliverContactSubmission(data: ContactFormData) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;

  if (!apiKey) {
    console.log("[contact] RESEND_API_KEY not set — logging submission instead of sending email:", data);
    return { delivered: false as const };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact Form <onboarding@resend.dev>",
      to: [toEmail],
      reply_to: data.email,
      subject: `New project inquiry from ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        data.company ? `Company: ${data.company}` : null,
        `Project Type: ${data.projectType}`,
        data.budget ? `Budget: ${data.budget}` : null,
        "",
        "Message:",
        data.message,
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Email delivery failed (${res.status}): ${body}`);
  }

  return { delivered: true as const };
}
