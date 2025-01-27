import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { encode } from "next-auth/jwt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { email, password } = await req.json();

    try {
        const user = await prisma.appUser.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json({ message: "Invalid credentials" }, {
                status: 401,
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return NextResponse.json({ message: "Invalid credentials" }, {
                status: 401,
            });
        }

        const secret = process.env.AUTH_SECRET;
        if (!secret) {
            throw new Error("AUTH_SECRET is not defined");
        }

        return NextResponse.json(
            { id: user.id, email: user.email, name: user.first_name + " " + user.last_name },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error during login:", error);
        return NextResponse.json({
            message: "Internal Server Error",
            error: error.message,
        },
            { status: 500 }
        );
    }
}
