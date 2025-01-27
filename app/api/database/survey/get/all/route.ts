import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { user_id } = await req.json()
    console.log(user_id)
    try {
        const surveys = await prisma.survey.findMany({
            where: {
                user_id: parseInt(user_id)
            }
        })
        console.log(surveys)
        return NextResponse.json(surveys)

    } catch (err) {
        console.log(err);
    }
}