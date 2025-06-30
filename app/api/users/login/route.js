import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
const secret = process.env.JWT_SECRET;

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body;
    const user = await prisma.users.findUnique({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return NextResponse.json(
        { message: "Invalid credentials" , status:"failed"},
        { status: 401 }
      );
    }

    const token = jwt.sign({ userId: user.id }, secret);
    const cookieStore = await cookies();
    cookieStore.set({
      name: "token",
      value: token,
      httpOnly: true,
      maxAge: 60 * 60,
      path:'/'
    });
    return NextResponse.json(
      {
        status: "success",
        message: "login successfully",
        token:token
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
