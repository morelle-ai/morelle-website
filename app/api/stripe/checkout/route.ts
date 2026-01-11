import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    return NextResponse.json(
      { error: "Missing STRIPE_SECRET_KEY environment variable." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2023-10-16"
  });
  
  const { 
    firstName, 
    lastName, 
    email, 
    address1, 
    address2, 
    city, 
    state, 
    zip, 
    country, 
    tier 
  } = await request.json();

  if (!firstName || !lastName || !email) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const origin =
    request.headers.get("origin") ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000";

  const reservationId = crypto.randomUUID();
  
  // R1 = $100, R2 = $50
  const depositAmount = tier === "R1" ? 10000 : 5000;
  const tierName = tier === "R1" ? "R1 (Priority)" : "R2";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    customer_email: email,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `Morelle E-Bike Reservation – ${tierName}`
          },
          unit_amount: depositAmount
        },
        quantity: 1
      }
    ],
    metadata: {
      reservation_id: reservationId,
      tier,
      first_name: firstName,
      last_name: lastName,
      address1: address1 || "",
      address2: address2 || "",
      city: city || "",
      state: state || "",
      zip: zip || "",
      country: country || ""
    },
    success_url: `${origin}/reserve/success?reservation_id=${reservationId}`,
    cancel_url: `${origin}/reserve/cancel?reservation_id=${reservationId}`
  });

  return NextResponse.json({ url: session.url });
}
