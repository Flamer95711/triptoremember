import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const salt = 10;
const secret = process.env.JWT_SECRET;
export async function POST(request) {
    try {
      const body = await request.json();
      const { name, email, username, password } = body;
  
      const password_hash = await bcrypt.hash(password, salt);
  
      const newUser = await prisma.users.create({
        data: { name, email, username, password_hash },
      });
      if (!newUser) {
        return NextResponse.json(
          {
            status: "failed",
            message: "all field are required",
          },
          { status: 400 }
        );
      }
  
      const token = jwt.sign({ userId: newUser.id }, secret);
      return NextResponse.json(
        {
          status: "success",
          message: "signUp successfully",
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