import { NextRequest, NextResponse } from "next/server";

interface ReqData {
    amount: number;
    name: string;
    message: string;
}

export async function POST(req: NextRequest) {

    const { amount, name, message }: ReqData = await req.json();
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
    
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
        {
            price_data: {
            currency: "INR",
            product_data: {
                name: "CheerMe",
                
                metadata: {
                    user_name: name,
                    user_message: message,
                }
            },
            unit_amount: amount * 100,
            },
            quantity: 1,
        },
        ],
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
        cancel_url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
    });
    
    return NextResponse.json(session);
}
