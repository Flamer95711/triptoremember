import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "dev-secret");

export async function middleware(request) {
  const storeCookie = await cookies();
  const token = storeCookie.get("token");

  const currentPath = request.nextUrl.pathname;

  // 1. If no token, redirect to login (except if already on /login)
  if (!token) {
    if (currentPath !== "/login") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  }

  try {
    const { payload } = await jwtVerify(token.value, secret);

    // 2. If already logged in and trying to access /login, redirect away
    if (currentPath === "/login") {
      return NextResponse.redirect(new URL("/diary", request.url));
    }

    // 3. Add user-id header and allow request to proceed
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("user-id", payload.userId);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (err) {
    console.error("JWT error:", err);

    // Token is invalid → redirect to login
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/api/users", "/", "/api/diary/:path*", "/diary/:path*", "/login"],
};
