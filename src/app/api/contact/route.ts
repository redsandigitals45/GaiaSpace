import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_SMTP_HOST,
  port: Number(process.env.ZOHO_SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_SMTP_USER,
    pass: process.env.ZOHO_SMTP_PASS,
  },
});

type ContactPayload = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  designation: string;
  reason: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    const required = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "company",
      "designation",
      "reason",
      "message",
    ] as const;

    for (const key of required) {
      if (!body[key]?.toString().trim()) {
        return NextResponse.json({ error: `Missing ${key}` }, { status: 400 });
      }
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from || !process.env.ZOHO_SMTP_USER) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 },
      );
    }

    const fullName = [body.firstName, body.middleName, body.lastName]
      .filter(Boolean)
      .join(" ");

    const result = await transporter.sendMail({
      from: `"Contact Form" <${from}>`,
      to,
      subject: `New Contact Form Submission - ${body.reason}`,
      replyTo: body.email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(body.phone)}</p>
        <p><strong>Company:</strong> ${escapeHtml(body.company)}</p>
        <p><strong>Designation:</strong> ${escapeHtml(body.designation)}</p>
        <p><strong>Reason:</strong> ${escapeHtml(body.reason)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(body.message).replaceAll("\n", "<br/>")}</p>
      `,
    });

    console.log("Email sent:", result.messageId);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email failed:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
