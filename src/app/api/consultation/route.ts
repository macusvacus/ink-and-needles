import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// The studio's email address that will receive all consultation requests
const STUDIO_EMAIL = process.env.STUDIO_EMAIL || "studio@inksneedles.com";

// Use your verified domain sender, or Resend's test address for development
// To use your own domain, verify it at https://resend.com/domains
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Inks & Needles <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, artist, style, placement, details } = body;

    if (!email || !details) {
      return NextResponse.json({ error: "Email and consultation details are required." }, { status: 400 });
    }

    // 1. Email to the studio
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "inksneedles4@gmail.com",
      subject: `New Consultation Request from ${name || email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #09090b; color: #fafafa; padding: 32px; border-radius: 12px;">
          <h1 style="font-size: 24px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.5px; margin-bottom: 8px;">New Consultation Request</h1>
          <p style="color: #71717a; margin-bottom: 32px;">Someone wants to book a consultation through the website.</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #27272a;">
              <td style="padding: 12px 0; color: #71717a; width: 140px;">Name</td>
              <td style="padding: 12px 0; font-weight: 600;">${name || "Not provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #27272a;">
              <td style="padding: 12px 0; color: #71717a;">Email</td>
              <td style="padding: 12px 0; font-weight: 600;"><a href="mailto:${email}" style="color: #a1a1aa;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #27272a;">
              <td style="padding: 12px 0; color: #71717a;">Preferred Artist</td>
              <td style="padding: 12px 0; font-weight: 600;">${artist || "No preference"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #27272a;">
              <td style="padding: 12px 0; color: #71717a;">Style</td>
              <td style="padding: 12px 0; font-weight: 600;">${style || "Not specified"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #27272a;">
              <td style="padding: 12px 0; color: #71717a;">Placement</td>
              <td style="padding: 12px 0; font-weight: 600;">${placement || "Not specified"}</td>
            </tr>
          </table>
          
          <div style="margin-top: 24px; background: #18181b; border-radius: 8px; padding: 16px;">
            <p style="color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Consultation Details</p>
            <p style="line-height: 1.7; white-space: pre-line;">${details}</p>
          </div>

          <div style="margin-top: 32px;">
            <a href="mailto:${email}" style="background: white; color: black; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px;">Reply to Client</a>
          </div>
        </div>
      `,
    });

    // 2. Confirmation email to the client (non-blocking — on Resend free tier
    // you can only send to your own verified email, so this may fail for other addresses)
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "inksneedles4@gmail.com",
        subject: "We received your consultation request!",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #09090b; color: #fafafa; padding: 32px; border-radius: 12px;">
            <h1 style="font-size: 24px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.5px; margin-bottom: 8px;">We got your request!</h1>
            <p style="color: #a1a1aa; line-height: 1.7;">Hi ${name || "there"},<br/><br/>
            Thank you for reaching out to <strong>Inks & Needles</strong>. We've received your consultation request and one of our artists will get back to you within <strong>24–48 hours</strong>.</p>
            
            <div style="margin-top: 24px; background: #18181b; border-radius: 8px; padding: 16px;">
              <p style="color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Your submission</p>
              <p style="line-height: 1.7; color: #d4d4d8; white-space: pre-line;">${details}</p>
            </div>

            <p style="margin-top: 32px; color: #52525b; font-size: 13px;">— The Inks & Needles Team</p>
          </div>
        `,
      });
    } catch (confirmErr) {
      console.warn("Client confirmation email failed (expected on Resend free tier):", confirmErr);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
