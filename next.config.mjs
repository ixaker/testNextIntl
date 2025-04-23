/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    baseUrl: process.env.NEXT_PUBLIC_URL,
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Forwarded-Host",
            value: process.env.NEXT_PUBLIC_URL,
          },
          {
            key: "X-Forwarded-Proto",
            value: process.env.NEXT_PUBLIC_URL?.startsWith("https")
              ? "https"
              : "http",
          },
        ],
      },
    ];
  },

  domains: ["store.qpart.com.ua"],
};

export default nextConfig;
