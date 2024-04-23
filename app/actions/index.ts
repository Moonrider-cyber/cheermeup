"use server";

import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

interface SendMoneyProps {
    name: string;
    message: string;
    amount: number;
    sessionId: string;
}

export async function SaveTransactions({ name, message, amount, sessionId } : SendMoneyProps) {
    
    const supabase = createClient();
    
    try {
        const result = await supabase.from('transactions').insert([
            {
                name: name,
                message: message,
                amount: amount,
                session_id: sessionId,
                created_at: new Date()
            }
        ]);
        return JSON.stringify(result);
    }
    catch (error) {
        return NextResponse.json({ error: error });
    }
    
}