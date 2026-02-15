import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password, name, role } = await req.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "missing required fields" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          error: "User already exitss",
        },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // create user

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: role as "ADMIN" | "MODERATOR" | "USER",
      },
    });

    const { password: _, ...userWithourPassoword } = user;

    return NextResponse.json(userWithourPassoword, { status: 201 });
  } catch (error) {
    console.log("signup error ", error);

    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}
