import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { checkRateLimit } from "@/lib/rateLimit";
import { contactFormSchema } from "@/lib/validations";

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.success) {
    return NextResponse.json(
      {
        message: "Too many requests. Please wait and try again.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": Math.ceil((rateLimit.resetAt - Date.now()) / 1000).toString(),
        },
      },
    );
  }

  const json = await request.json().catch(() => null);

  const parsed = contactFormSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Please check the submitted information and try again.",
        issues: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const payload = parsed.data;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;
  const smtpConfigured =
    SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && CONTACT_TO_EMAIL;

  if (smtpConfigured) {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const safeMessage = escapeHtml(payload.message).replaceAll("\n", "<br />");

    try {
      await transporter.sendMail({
        from: `"Dion Power Solutions Website" <${SMTP_USER}>`,
        to: CONTACT_TO_EMAIL,
        replyTo: payload.email,
        subject: `New inquiry from ${payload.name}`,
        text: [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Phone: ${payload.phone || "Not provided"}`,
          "",
          "Message:",
          payload.message,
        ].join("\n"),
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #0f172a;">
            <h2 style="margin-bottom: 16px;">New Dion Power Solutions inquiry</h2>
            <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(payload.phone || "Not provided")}</p>
            <p><strong>Message:</strong></p>
            <p>${safeMessage}</p>
          </div>
        `,
      });
    } catch (error) {
      console.error("Failed to send contact email", error);
    }
  }

  return NextResponse.json({
    message: "Inquiry sent successfully.",
  });
}
