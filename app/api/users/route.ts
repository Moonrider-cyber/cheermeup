import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json(
        { message: "Hello, Users!" }
    )
}

export async function POST(req: Request){
    const data = await req.json();

    return NextResponse.json(
        { message: `Users created! ${data.name}`, data }
    )
}