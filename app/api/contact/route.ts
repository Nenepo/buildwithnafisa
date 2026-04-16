import { NextResponse } from "next/server";

export async function POST(req: Request){
    const body = await req.json();

    try{
        await fetch (process.env.MAKE_WEBHOOK_URL!, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to send message" }, { status: 500 });

    }
}