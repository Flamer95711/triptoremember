import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";


export async function GET(request) {
  const userId = request.headers.get("user-id");
  try {
  const user = await prisma.users.findUnique({
      where: {
        id: userId,
      },
      select: {
        name: true,
        email: true,
        username: true,
      },
    });
    
    return NextResponse.json({user}, { status: 200 });
  } catch (error) {
    console.error("Error fetching:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


