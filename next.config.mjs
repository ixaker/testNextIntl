/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["li"],
    defaultLocale: "li",
    localeDetection: true,
    domains: [
      {
        domain: "store.qpart.com.ua",
        defaultLocale: "uk",
      },
      {
        domain: "store.qpart.com.ua",
        defaultLocale: "en",
      },
    ],
  },
};

export default nextConfig;
