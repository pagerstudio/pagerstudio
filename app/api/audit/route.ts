import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(str: string): string {
  return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const MAX_LENGTHS = {
  practice: 200,
  name: 100,
  email: 254,
  city: 100,
  website: 500,
  specialty: 100,
  plan: 50,
};

let ratelimit: Ratelimit | null = null;

function getRatelimit() {
  if (ratelimit) return ratelimit;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, '60s'),
    analytics: true,
  });
  return ratelimit;
}

function checkRateLimitFallback(ip: string): boolean {
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const rl = getRatelimit();
    if (rl) {
      const { success } = await rl.limit(ip);
      if (!success) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
      }
    } else if (!checkRateLimitFallback(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const body = await req.json();
    const { practice, name, email, city, website, specialty, plan } = body;

    if (!practice || !name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (typeof practice !== 'string' || typeof name !== 'string' || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid field types' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const trimmed = {
      practice: practice.trim().slice(0, MAX_LENGTHS.practice),
      name: name.trim().slice(0, MAX_LENGTHS.name),
      email: email.trim().slice(0, MAX_LENGTHS.email),
      city: (city || '').trim().slice(0, MAX_LENGTHS.city),
      website: (website || '').trim().slice(0, MAX_LENGTHS.website),
      specialty: (specialty || '').trim().slice(0, MAX_LENGTHS.specialty),
      plan: (plan || '').trim().slice(0, MAX_LENGTHS.plan),
    };

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json({ error: 'Email not configured' }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const safe = {
      practice: escapeHtml(trimmed.practice),
      name: escapeHtml(trimmed.name),
      email: escapeHtml(trimmed.email),
      city: escapeHtml(trimmed.city),
      website: escapeHtml(trimmed.website),
      specialty: escapeHtml(trimmed.specialty),
      plan: escapeHtml(trimmed.plan) || 'Not specified',
      websiteUrl: escapeAttr(trimmed.website),
    };

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM || 'Pager Studio <onboarding@resend.dev>',
      to: 'hello.pagerstudio@gmail.com',
      replyTo: trimmed.email,
      subject: `New Audit Request — ${trimmed.practice}`,
      text: `New free audit submission\n\nPractice: ${trimmed.practice}\nContact: ${trimmed.name}\nEmail: ${trimmed.email}\nCity: ${trimmed.city || 'Not provided'}\nWebsite: ${trimmed.website || 'Not provided'}\nSpecialty: ${trimmed.specialty || 'Not provided'}\nPlan Selected: ${trimmed.plan || 'Not specified'}\nSubmitted: ${submittedAt}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 32px 16px;">
            <tr>
              <td align="center">
                <table width="480" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">
                  <tr>
                    <td style="background-color: #111111; padding: 24px 32px;">
                      <h1 style="margin: 0; font-size: 20px; font-weight: 600; color: #ffffff; letter-spacing: -0.02em;">
                        Pager <em style="font-style: italic;">Studio</em>
                      </h1>
                      <p style="margin: 4px 0 0; font-size: 12px; color: rgba(255,255,255,0.5);">Free AI Visibility Audit Request</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 28px 32px;">
                      <h2 style="margin: 0 0 20px; font-size: 16px; font-weight: 600; color: #111111;">
                        New lead from contact form
                      </h2>
                      <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden;">
                        <tr>
                          <td style="padding: 12px 16px; background-color: #fafafa; border-bottom: 1px solid #e5e5e5; width: 130px; font-size: 13px; color: #666666; font-weight: 500;">Practice</td>
                          <td style="padding: 12px 16px; border-bottom: 1px solid #e5e5e5; font-size: 14px; color: #111111; font-weight: 600;">${safe.practice}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 16px; background-color: #fafafa; border-bottom: 1px solid #e5e5e5; font-size: 13px; color: #666666; font-weight: 500;">Contact</td>
                          <td style="padding: 12px 16px; border-bottom: 1px solid #e5e5e5; font-size: 14px; color: #111111;">${safe.name}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 16px; background-color: #fafafa; border-bottom: 1px solid #e5e5e5; font-size: 13px; color: #666666; font-weight: 500;">Email</td>
                          <td style="padding: 12px 16px; border-bottom: 1px solid #e5e5e5; font-size: 14px; color: #111111;"><a href="mailto:${safe.email}" style="color: #2563eb; text-decoration: none;">${safe.email}</a></td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 16px; background-color: #fafafa; border-bottom: 1px solid #e5e5e5; font-size: 13px; color: #666666; font-weight: 500;">City</td>
                          <td style="padding: 12px 16px; border-bottom: 1px solid #e5e5e5; font-size: 14px; color: #111111;">${safe.city || '—'}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 16px; background-color: #fafafa; border-bottom: 1px solid #e5e5e5; font-size: 13px; color: #666666; font-weight: 500;">Website</td>
                          <td style="padding: 12px 16px; border-bottom: 1px solid #e5e5e5; font-size: 14px; color: #111111;">${trimmed.website ? `<a href="${safe.websiteUrl}" style="color: #2563eb; text-decoration: none;" target="_blank">${safe.website}</a>` : '—'}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 16px; background-color: #fafafa; font-size: 13px; color: #666666; font-weight: 500;">Specialty</td>
                          <td style="padding: 12px 16px; font-size: 14px; color: #111111;">${safe.specialty || '—'}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 16px; background-color: #fafafa; border-top: 1px solid #e5e5e5; font-size: 13px; color: #666666; font-weight: 500;">Plan Selected</td>
                          <td style="padding: 12px 16px; border-top: 1px solid #e5e5e5; font-size: 14px; color: #111111; font-weight: 600;">${safe.plan}</td>
                        </tr>
                      </table>
                      <p style="margin: 20px 0 0; font-size: 12px; color: #999999;">
                        Submitted ${submittedAt}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 16px 32px; border-top: 1px solid #e5e5e5; background-color: #fafafa;">
                      <p style="margin: 0; font-size: 11px; color: #999999; text-align: center;">
                        Reply directly to this email to respond to ${safe.name}.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
