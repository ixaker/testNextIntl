// import createMiddleware from 'next-intl/middleware';
// import {routing} from './i18n/routing';

// export default createMiddleware(routing);

// export const config = {
//   // Match all pathnames except for
//   // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
//   // - … the ones containing a dot (e.g. `favicon.ico`)
//   matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
// };

import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales: ['en', 'de'],
    defaultLocale: 'de',
    domains: [
      {
        domain: 'store.qpart.com.ua',
        defaultLocale: 'en',
        locales: ['de', 'en']
      }
    ],
    localePrefix: 'always'
  });

  const response = handleI18nRouting(request);

  const redirectDomain = 'store.qpart.com.ua';

  if (request.headers.get('host')?.includes('localhost')) {
    const urlObj = request.nextUrl.clone();

    urlObj.protocol =
      request.headers.get('x-forwarded-proto') ?? request.nextUrl.protocol;
    urlObj.port = '';
    urlObj.host = redirectDomain;

    return NextResponse.redirect(urlObj.toString());
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next).*)']
};
