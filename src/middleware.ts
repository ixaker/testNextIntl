import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Это минимальный middleware, который ничего не делает — просто пропускает запрос
export function middleware(req: NextRequest) {
  // Можно залогировать, чтобы убедиться, что middleware сработал
  const { pathname } = req.nextUrl;

  const pathnameIsMissingLocale = !/^\/(en|ru|uk)(\/|$)/.test(pathname);

  if (pathnameIsMissingLocale) {
    const acceptLang = req.headers.get("accept-language");
    const browserLang = acceptLang?.split(",")[0].split("-")[0] || "en";
    const redirectLocale = ["en", "ru", "uk"].includes(browserLang)
      ? browserLang
      : "en";

    // 🔥 абсолютный путь, но без подмены origin
    const relativeRedirect = `/${redirectLocale}${pathname}`;

    return NextResponse.redirect(new URL(relativeRedirect, req.nextUrl.origin));
  }

  return NextResponse.next();
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
