import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "test";

  const nextUrl = request.nextUrl;
  const headers = request.headers;

  const dataNext = {
    href: nextUrl.href,
    origin: nextUrl.origin,
    host: nextUrl.host,
    hostname: nextUrl.hostname,
  };

  const dataHeader = {
    href: headers.get("host"),
    origin: headers.get("x-forwarded-host"),
  };

  return NextResponse.json({
    dataHeader,
    dataNext,
    baseUrl: baseUrl,
  });
}
