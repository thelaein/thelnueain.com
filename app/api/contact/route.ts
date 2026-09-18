import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  type?: string;
  message?: string;
};

// In-memory rate limit (use Redis/Upstash in production)
const hits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_HITS = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const arr = hits.get(ip) ?? [];
  const recent = arr.filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Try again in a minute." }, { status: 429 });
  }

  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const company = (body.company ?? "").trim();
  const type = (body.type ?? "").trim();
  const message = (body.message ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length <= 1) errors.name = "Name is required.";
  if (!isEmail(email)) errors.email = "Valid email is required.";
  if (!type) errors.type = "Project type is required.";
  if (message.length <= 4) errors.message = "Message is too short.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ error: "Validation failed.", fields: errors }, { status: 422 });
  }

  // TODO: wire to Resend / Nodemailer / Slack
  // await resend.emails.send({ from: "portfolio@thelnueain.com", to: siteConfig.email, subject: `Inquiry: ${type} — ${name}`, text: `${message}\n\nFrom: ${name} <${email}>${company ? `\nCompany: ${company}` : ""}` });

  console.log("[contact] inquiry", { name, email, company, type, message: message.slice(0, 400) });

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ ok: true, hint: "POST {name,email,type,message} to /api/contact" });
}
