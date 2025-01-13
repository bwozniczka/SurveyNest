import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const secret = process.env.AUTH_SECRET;

        console.log("Request headers:", req.headers);

        const token = await getToken({ req, secret });

        console.log("Decoded token:", token);

        if (!token) {
            return NextResponse.json(
                { error: "Unauthorized: Token is missing or invalid" },
                { status: 401 }
            );
        }

        return NextResponse.json({ message: "Token is valid", token });
    } catch (error) {
        console.error("Error in GET handler:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    return NextResponse.json(
        { error: "POST method is not implemented" },
        { status: 501 }
    );
}
