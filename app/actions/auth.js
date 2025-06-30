"use server";

import { cookies } from "next/headers";

const url = process.env.API_URL;
export async function loginAction(prevState, formData) {
  const username = formData.get("username");
  const password = formData.get("password");
  const response = await fetch(`${url}/login`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  const token = data.token;
  const cookieStore = await cookies();
  cookieStore.set({
    name: "token",
    value: token,
    httpOnly: true,
    maxAge: 60 * 60,
  });

  if (data.status == "success") {
    return { success: true };
  } else {
    return {
      error: data.message,
    };
  }
}

export async function signinAction(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    const name = formData.get("name");
    const email = formData.get("email");
    const response = await fetch(`${url}/signin`, {
      method: "POST",
      body: JSON.stringify({ username, password , name, email}),
    });
    const data = await response.json();
    const token = data.token;
    const cookieStore = await cookies();
    cookieStore.set({
      name: "token",
      value: token,
      httpOnly: true,
      maxAge: 60 *60,
    });
  
    if (data.status == "success") {
      return { success: true };
    } else {
      return {
        error: data.message,
      };
    }
  }