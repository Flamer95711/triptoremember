"use server";

import slugify from "slugify";
import { cookies } from "next/headers";

const url = process.env.DAIRY_API_URL;

export async function diaryCreationAction(prevState, formData) {
  const title = formData.get("title");
  const content = formData.get("content");
  const location = formData.get("location");
  const coverImage = formData.get("coverImage");
  const imagesList = formData.get("images") || [];
  const weatherAtTime = formData.get("weatherAtTime");
  const temperature = formData.get("temperature");
  const isPublicRaw = formData.get("isPublic");
  const isPublic = isPublicRaw === "true";

  const baseSlug = slugify(title || "diary", {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  });
  const images = imagesList
    .split(",") 
    .map((s) => s.trim()) 
    .filter(Boolean);

  const timestamp = Date.now();
  const slug = `${baseSlug}-${timestamp}`;

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  try {
    const diaryEntry = await fetch(`${url}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `token=${token}`,
      },
      body: JSON.stringify({
        title,
        content,
        location,
        slug,
        coverImage,
        images,
        weatherAtTime,
        temperature,
        isPublic,
      }),
    });

    const res = await diaryEntry.json();
    return {
      success: diaryEntry.ok,
      data: res,
    };
  } catch (error) {
    console.error("Error creating diary:", error);
    return {
      success: false,
      error,
    };
  }
}
