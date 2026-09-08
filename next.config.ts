import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/webp", "image/avif"],
  },

  async headers() {
    return [
      {
        source: "/static/earth/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/mission",
        destination: "/missions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
