import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

const secret = process.env.JWT_SECRET;
export async function GET(request) {
  const token = request.headers.get("user-id");
  try {
    const diaries = await prisma.diary.findMany({
      where: {
        OR: [{ authorId: token }, { isPublic: true }],
      },
    });

    return NextResponse.json({ success: "yes", data: diaries });
  } catch (error) {
    console.error("Error getting Data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
