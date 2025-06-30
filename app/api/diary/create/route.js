import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const token = request.headers.get("user-id");

  const {
    title,
    content,
    location,
    slug,
    coverImage,
    images,
    weatherAtTime,
    isPublic,
  } = body;
  try {
    if (!title || !content || !location || !slug) {
      return NextResponse.json(
        { success: false, message: "all fields are mandatory" },
        { status: 400 }
      );
    }
    const authorId = token;
    const diary = await prisma.Diary.create({
      data: {
        title,
        content,
        location,
        slug,
        coverImage,
        images,
        weatherAtTime,
        isPublic,
        authorId
      },
    });

    return NextResponse.json(
      { success: true, message: "dairy created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating diary:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
