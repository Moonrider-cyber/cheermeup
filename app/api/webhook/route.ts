"use server";

import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import { SaveTransactions } from "@/app/actions";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const res = JSON.parse(payload);
  const sig = request.headers.get("Stripe-Signature")!;
  
  let stripe_event;

  try {
    stripe_event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
    
  } catch (err) {
    console.error(err);
    return NextResponse.json({ status: "Webhook Error", err });
  }

  if(stripe_event?.type === "checkout.session.completed") {
    const session = stripe_event.data.object;

    const line_items = await stripe.checkout.sessions.retrieve(
      session.id,
      { expand: ["line_items.data.price.product"] }
    );

    let user_name = "";
    let user_message = "";
    const amount = Number(line_items.amount_total) / 100 ?? 0;

    console.log("Line Items", line_items);
    

    line_items.line_items?.data.forEach((lineItem) => {
      const product = lineItem.price?.product as Stripe.Product;
      const metadata = product.metadata;      

      user_name = metadata?.user_name;
      user_message = metadata?.user_message;
    });

    const result = await SaveTransactions({
      name: user_name,
      message: user_message,
      amount,
      sessionId: session.id
    });

    return NextResponse.json({ status: "Success" });
  }

  return NextResponse.json({ status: "Success" });
}
