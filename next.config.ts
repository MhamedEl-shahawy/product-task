import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.dummyjson.com", "i.dummyjson.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
