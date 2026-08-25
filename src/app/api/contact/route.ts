import { NextRequest, NextResponse } from "next/server";
import { ContactFormData } from "@/types";
import { deliverContactSubmission } from "@/lib/contact";

function isValidPayload(body: unknown): body is ContactFormData {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.projectType === "string" &&
    b.projectType.trim().length > 0 &&
    typeof b.message === "string" &&
    b.message.trim().length > 0
  );
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Missing or invalid required fields." }, { status: 400 });
  }

  try {
    await deliverContactSubmission(body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] Failed to deliver submission:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
