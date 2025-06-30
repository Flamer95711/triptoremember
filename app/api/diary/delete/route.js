import { prisma } from "@/app/lib/prisma";
import { message } from "antd";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  const { id } = data;
  try {
    const deletingDairy = await prisma.diary.findUnique({
      where: { id },
    });

    if (!deletingDairy) {
      return NextResponse.json(
        { success: false, message: "The diary does not exist" },
        { status: 404 }
      );
    }

    const deletedDairy = await prisma.diary.delete({
      where: { id },
    });
    return NextResponse.json(
      { success: true, message: "dairy deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting diary:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
