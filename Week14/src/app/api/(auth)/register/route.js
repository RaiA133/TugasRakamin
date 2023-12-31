import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export const POST = async (req, { params }) => {
  const { name, email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const { password: passwordDB, ...user } = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }
};