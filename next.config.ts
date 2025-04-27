import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // cdn.sanity.io
  images: {
    domains: [
      "cdn.sanity.io",
    ],
  },
};

export default nextConfig;
