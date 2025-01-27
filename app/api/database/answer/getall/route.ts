import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { survey_id } = await req.json();
    try {
        const answers = await prisma.answer.findMany({
            where: {
                survey_id: parseInt(survey_id),
            },
        });

        return NextResponse.json(answers, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "problem" }, { status: 500 })
    }
}