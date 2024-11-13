import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing required environment variable: STRIPE_SECRET_KEY.");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const productPriceMap: Record<string, string> = {
  pro: process.env.STRIPE_PRICE_ID_SUBSCRIPTION_PRO || "",
  enterprise: process.env.STRIPE_PRICE_ID_SUBSCRIPTION_ENTERPRISE || "",
};

export async function POST(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  const { productId } = params;

  const priceId = productPriceMap[productId];
  if (!priceId) {
    return NextResponse.json(
      { error: `Invalid productId: ${productId}.` },
      { status: 400 }
    );
  }

  try {
    const origin = req.headers.get("origin");
    if (!origin) {
      return NextResponse.json(
        { error: "Origin header is missing." },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      mode: "subscription",
      return_url: `${origin}/`,
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (err: any) {
    console.error("Error in POST handler:", err);
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  const { productId } = params;

  const priceId = productPriceMap[productId];
  if (!priceId) {
    return NextResponse.json(
      { error: `Invalid productId: ${productId}.` },
      { status: 400 }
    );
  }

  try {
    const { searchParams } = new URL(req.url);
    const session_id = searchParams.get("session_id");

    if (!session_id) {
      return NextResponse.json(
        { error: "Missing session_id parameter." },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);

    return NextResponse.json({
      status: session.status,
      customer_email: session.customer_details?.email,
    });
  } catch (err: any) {
    console.error("Error in GET handler:", err);
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}
