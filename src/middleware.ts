import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["en", "ru", "uk"];
const DEFAULT_LOCALE = "en";
// Это минимальный middleware, который ничего не делает — просто пропускает запрос
export function middleware(req: NextRequest) {
  console.log("Поавли в middleware");

  // Можно залогировать, чтобы убедиться, что middleware сработал
  const { pathname } = req.nextUrl;

  console.log("pathname", pathname, req.nextUrl);

  const pathnameIsMissingLocale = !/^\/(en|ru|uk)(\/|$)/.test(pathname);

  if (pathnameIsMissingLocale) {
    const acceptLang = req.headers.get("accept-language");
    const browserLang =
      acceptLang?.split(",")[0].split("-")[0] || DEFAULT_LOCALE;
    const locale = SUPPORTED_LOCALES.includes(browserLang)
      ? browserLang
      : DEFAULT_LOCALE;

    const redirectPath = `/${locale}${pathname}`;

    // 👉 принудительно укажем нужный origin вручную (вручную подставляем домен)
    const fullUrl = new URL(redirectPath, `https://store.qpart.com.ua`);

    return NextResponse.redirect(fullUrl);
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
