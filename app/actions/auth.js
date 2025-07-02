"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

const url = process.env.API_URL;
export async function loginAction(prevState, formData) {
  const username = formData.get("username");
  const password = formData.get("password");
  try {
    const response = await fetch(`${url}/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    if (!response) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || "Something went wrong during sign-in"
      );
    }
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
  } catch (error) {}
}

export async function signinAction(prevState, formData) {
  try {
    const username = formData.get("username");
    const password = formData.get("password");
    const name = formData.get("name");
    const email = formData.get("email");

    const response = await fetch(`${url}/signin`, {
      method: "POST",
      body: JSON.stringify({ username, password, name, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || "Something went wrong during sign-in"
      );
    }

    const data = await response.json();
    const token = data.token;

    if (token) {
      const cookieStore = await cookies();
      cookieStore.set({
        name: "token",
        value: token,
        httpOnly: true,
        maxAge: 60 * 60,
      });
    }

    if (data.status === "success") {
      return { success: true };
    } else {
      return { error: data.message || "Sign-in failed" };
    }
  } catch (error) {
    console.error("Sign-in error:", error);
    return { error: error.message || "Unexpected error during sign-in" };
  }
}
export async function logoutAction() {
  try {
    const cookieStore = cookies();
    cookieStore.delete("token");
    return {success:true,error:null}
  } catch (error) {
    console.error(error);
    return { success:false,error:error};
  }
}
