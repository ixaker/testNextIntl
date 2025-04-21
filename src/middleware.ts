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

export default createMiddleware({
  locales: ['ua', 'de', 'en'],
  defaultLocale: 'ua',
  domains: [
    {
      domain: 'store.qpart.com.ua',
      defaultLocale: 'ua',
      locales: ['ua']
    },
    {
      domain: 'de.store.qpart.com.ua',
      defaultLocale: 'de',
      locales: ['de']
    }
    // ...
  ]
});

export const config = {
  matcher: ['/((?!_next).*)']
};
