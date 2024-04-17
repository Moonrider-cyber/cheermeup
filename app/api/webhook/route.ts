import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest, response: NextResponse) {

    const payload = await request.text();
    const res = JSON.parse(payload);

    const sig = request.headers.get("Stripe-Signature")!;

    const dateTime = new Date(res.createdAt * 1000).toLocaleDateString();

    try{
        let event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET!);
        
        return NextResponse.json({ status: "Success", event: event.type });
    }catch(err){
        return NextResponse.json({ status: "Webhook Error", err });
    }

}