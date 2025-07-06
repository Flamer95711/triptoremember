import { cookies } from "next/headers";

export async function getUserById() {
  try {
    const url = process?.env?.API_URL;
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Cookie: `token=${token}`,
      },
    });
    if (!response.ok) {
      console.error("error");
      throw new Error(error);
    }
    const data = await response.json();  
    return data;
  } catch (error) {
    console.error("error fetching user data", error);
    return;
  }
}
