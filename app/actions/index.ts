"use server";

import { createClient } from "@/utils/supabase/server";

export async function SendMoney(data: any) {
    
    const supabase = createClient();
    const result = await supabase.from('transactions').insert([
        {
            name: data.name,
            message: data.message,
            amount: data.amount,
            created_at: new Date()
        }
    ]);

    return JSON.stringify(result);
}