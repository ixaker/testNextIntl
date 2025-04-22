import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Это минимальный middleware, который ничего не делает — просто пропускает запрос
export function middleware(req: NextRequest) {
  console.log("Поавли в middleware");

  // Можно залогировать, чтобы убедиться, что middleware сработал
  const { pathname } = req.nextUrl;

  console.log("pathname", pathname, req.nextUrl);

  const pathnameIsMissingLocale = !/^\/(en|ru|uk)(\/|$)/.test(pathname);

  if (pathnameIsMissingLocale) {
    console.log("попали в pathnameIsMissingLocale", pathnameIsMissingLocale);
    const acceptLang = req.headers.get("accept-language");
    const browserLang = acceptLang?.split(",")[0].split("-")[0] || "en";
    const redirectLocale = ["en", "ru", "uk"].includes(browserLang)
      ? browserLang
      : "en";

    const redirectPath = `/${redirectLocale}${pathname}`;

    console.log("redirectPath", redirectPath);
    return NextResponse.redirect(redirectPath);
  }
  console.log("next");
  return NextResponse.next();
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/",
};
