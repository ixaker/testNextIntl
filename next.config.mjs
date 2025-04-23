/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    baseUrl: process.env.NEXT_PUBLIC_URL,
  },

  async headers() {
    return [
      {
        env: {
          BASE_URL: "https://store.qpart.com.ua",
        },
        source: "/:path*",
        headers: [
          {
            key: "X-Accel-Buffering",
            value: "no",
          },
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
};

export default nextConfig;
