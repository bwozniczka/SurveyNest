import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { survey_id } = await req.json()
    console.log(survey_id)
    try {
        const survey = await prisma.survey.findUnique({
            where: {
                id: parseInt(survey_id)
            }
        })
        console.log(survey)
        return NextResponse.json(survey)

    } catch (err) {
        console.log(err);
    }
}