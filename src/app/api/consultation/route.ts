import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, artist, style, placement, details } = body;

    if (!email || !details) {
      return NextResponse.json({ error: "Email and consultation details are required." }, { status: 400 });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not defined in environment variables.");
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    // Send data to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Consultation Request from ${name || email}`,
        from_name: "Inks & Needles Website",
        name: name || "Not provided",
        email: email,
        Preferred_Artist: artist || "No preference",
        Style: style || "Not specified",
        Placement: placement || "Not specified",
        Details: details,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error("Web3Forms error:", result);
      return NextResponse.json({ error: "Failed to send email via Web3Forms." }, { status: 500 });
    }
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
