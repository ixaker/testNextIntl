import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const nextUrl = request.nextUrl;
  //   console.log("nextUrl", nextUrl);

  const data = {
    href: nextUrl.href,
    origin: nextUrl.origin,
    host: nextUrl.host,
    hostname: nextUrl.hostname,
  };

  const stringifyNextUrl = JSON.stringify(data);

  console.log("stringifyNextUrl", stringifyNextUrl);

  console.log("-------------------------------------");

  const response = NextResponse.next();

  response.cookies.set("next-url-data-test", stringifyNextUrl, {
    path: "/",
    sameSite: "strict",
  });

  return response;
}

export const config = {
  //   matcher: "/about/:path*",
};
