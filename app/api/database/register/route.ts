import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, password } = await req.json();

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
        first_name: "",
        last_name: "",
      },
    });

    return new Response(JSON.stringify({ user }), { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
