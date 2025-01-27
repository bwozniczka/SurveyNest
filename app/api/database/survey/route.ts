import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { survey, user_id } = await req.json();
    try {
        await prisma.survey.create({
            data: {
                survey_data: survey,
                user_id: parseInt(user_id),
            },
        });

        return NextResponse.json({ message: "added" }, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "problem" }, { status: 500 })
    }
}

export async function PUT(req: Request) {
    const { survey, survey_id } = await req.json();
    try {
        await prisma.survey.update({
            where: {
                id: parseInt(survey_id),
            },
            data: {
                survey_data: survey,
            },
        });

        return NextResponse.json({ message: "updated" }, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "problem" }, { status: 500 })
    }
}

export async function DELETE(req: Request) {
    const { survey_id } = await req.json();
    try {
        await prisma.survey.delete({
            where: {
                id: parseInt(survey_id)
            }
        });

        return NextResponse.json({ message: "deleted" }, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "problem" }, { status: 500 })
    }
}
