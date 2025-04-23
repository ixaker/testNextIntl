import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const nextUrl = request.nextUrl;

  const data = {
    href: nextUrl.href,
    origin: nextUrl.origin,
    host: nextUrl.host,
    hostname: nextUrl.hostname,
  };

  return NextResponse.json(data);
}
