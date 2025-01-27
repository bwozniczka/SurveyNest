import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { getToken } from "next-auth/jwt";
import { encode } from "next-auth/jwt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { firstName, lastName, email, password } = await req.json();

  if (!email || !password) {
    return new Response(
      JSON.stringify({ message: "Email and password are required" }),
      {
        status: 400,
      }
    );
  }

  try {
    const existingUser = await prisma.appUser.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.appUser.create({
      data: {
        email,
        password: hashedPassword,
        first_name: firstName,
        last_name: lastName,
      },
    });

    // Generate JWT token using next-auth/jwt
    const secret = process.env.AUTH_SECRET;
    if (!secret) {
      throw new Error("AUTH_SECRET is not defined");
    }
    const token = await encode({
      token: { id: user.id, email: user.email },
      secret,
      salt: bcrypt.genSaltSync(10)
    });

    return NextResponse.json({
      message: "User created successfully",
      user: { id: user.id, email: user.email },
      token,
    },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating user:", error);
    return NextResponse.json({
      message: "Internal Server Error",
      error: error.message,
    },
      { status: 500 }
    );
  }
}
