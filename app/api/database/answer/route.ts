import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { survey_id, answer } = await req.json();
    console.log(answer)
    try {
        await prisma.answer.create({
            data: {
                survey_id: parseInt(survey_id),
                answer
            },
        });

        return NextResponse.json({ message: "added" }, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "problem" }, { status: 500 })
    }
}