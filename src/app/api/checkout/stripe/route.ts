import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-06-24.dahlia" as any,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { artistName, date, time, depositAmount } = body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Tattoo Deposit – ${artistName}`,
              description: `Booking for ${date} at ${time}`,
            },
            unit_amount: depositAmount * 100, // convert to cents
          },
          quantity: 1,
        },
      ],
      success_url: `${req.nextUrl.origin}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/booking`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
