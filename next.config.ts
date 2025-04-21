// import {NextConfig} from 'next';
// import createNextIntlPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntlPlugin({
//   experimental: {
//     createMessagesDeclaration: './messages/en.json'
//   }
// });

// const config: NextConfig = {
//   i18n: {
//     locales: ['de', 'en'],
//     defaultLocale: 'en',
//     domains: [
//       {
//         domain: 'store.qpart.com.ua',
//         defaultLocale: 'en',
//         locales: ['de', 'en']
//       }
//     ]
//   }
// };

// export default withNextIntl(config);

import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const config: NextConfig = {};

export default withNextIntl(config);
