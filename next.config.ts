import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hulmsolutions.com',
      },
    ],
  },
};

export default nextConfig;
