import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Это минимальный middleware, который ничего не делает — просто пропускает запрос
export function middleware(request: NextRequest) {
  // Можно залогировать, чтобы убедиться, что middleware сработал

  console.log("req.headers", request.headers);

  console.log(
    "[Middleware] Запрос прошёл через middleware:",
    request.nextUrl.pathname
  );

  return NextResponse.next();
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
