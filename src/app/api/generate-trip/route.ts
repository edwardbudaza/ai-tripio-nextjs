import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server"; 
import { AI_PROMPT } from "@/constants/options";
import { chatSession } from "@/lib/gemini";

export async function POST(request: Request) {
    const {userId} = auth();
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized"}, { status: 401 } );
    }

    const body = await request.json();
    const { location, noOfDays, budget, traveler } = body;

    const FINAL_PROMPT = AI_PROMPT
        .replace("{location}", location.label)
        .replace("{totalDays}", noOfDays)
        .replace("{traveler}", traveler)
        .replace("{budget}", budget);

    try {
        const result = await chatSession.sendMessage(FINAL_PROMPT);
        const tripData = JSON.parse(result.response.text());
        
        const tripId = Date.now().toString();
        return NextResponse.json({ tripId, tripData });
    } catch (error) {
        console.error("Error generating trip", error);
        return NextResponse.json({ error: "Failed to generate trip" }, { status: 500 });
    }
};