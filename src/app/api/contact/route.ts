import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import tls from "node:tls";

// nodemailer needs Node APIs (sockets), not the Edge runtime
export const runtime = "nodejs";

// Trust the OS certificate store as well as Node's bundled CAs. Antivirus such as Avast
// re-signs SMTP traffic with a root it installs into Windows; certificates are still verified.
// getCACertificates exists in Node 22.15+/23.8+, newer than the @types/node in this project
const { getCACertificates } = tls as typeof tls & {
  getCACertificates?: (type: "default" | "system") => string[];
};
const trustedCAs = getCACertificates
  ? [...new Set([...getCACertificates("default"), ...getCACertificates("system")])]
  : undefined;

const EMAIL_RE =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO_EMAIL } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error("Contact form: GMAIL_USER / GMAIL_APP_PASSWORD are not set");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field, bots usually do
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || name.length > 100) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { error: "Message must be between 10 and 5000 characters." },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    // Port 587 + STARTTLS: works everywhere, including PCs where antivirus (e.g. Avast Mail Shield) breaks port 465
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    tls: trustedCAs ? { ca: trustedCAs } : undefined,
    // Google displays app passwords as "abcd efgh ijkl mnop"; the spaces aren't part of it
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD.replace(/\s+/g, "") },
  });

  try {
    await transporter.sendMail({
      // Gmail only allows sending as the authenticated account; replyTo routes replies to the visitor
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: CONTACT_TO_EMAIL || GMAIL_USER,
      replyTo: { name, address: email },
      subject: `Portfolio message from ${name.replace(/[\r\n]/g, " ")}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <hr />
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    return NextResponse.json(
      { error: "Sorry, your message could not be sent. Please email me directly." },
      { status: 502 },
    );
  }
}
