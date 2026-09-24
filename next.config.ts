import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      {
        source: '/insights',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/insights/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/case-studies',
        destination: '/pos-case-studies',
        permanent: true,
      },
      {
        source: '/case-studies/:slug*',
        destination: '/pos-case-studies/:slug*',
        permanent: true,
      },
      {
        source: '/industries/bakery',
        destination: '/industries/bakery-pos-system',
        permanent: true,
      },
      {
        source: '/industries/salon-spa',
        destination: '/industries/salon-pos',
        permanent: true,
      },
      {
        source: '/industries/restaurant',
        destination: '/industries/restaurant-pos',
        permanent: true,
      },
      {
        source: '/point-of-sale-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/author/hulm-editorial-team',
        destination: '/author/hulm-solutions-editorial-team',
        permanent: true,
      },
      {
        source: '/author/hulm-team',
        destination: '/author/hulm-solutions-editorial-team',
        permanent: true,
      },
      {
        source: '/author/aamir-khan',
        destination: '/author/hulm-solutions-editorial-team',
        permanent: true,
      },
    ];
  },
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
