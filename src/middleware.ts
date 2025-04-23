import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // const nextUrl = request.nextUrl;
  const headers = request.headers;

  // const data = {
  //   href: nextUrl.href,
  //   origin: nextUrl.origin,
  //   host: nextUrl.host,
  //   hostname: nextUrl.hostname,
  // };

  const data = {
    href: headers.get("host"),
    origin: headers.get("x-forwarded-host"),
  };

  console.log("data", data);

  return NextResponse.json(data);
}
