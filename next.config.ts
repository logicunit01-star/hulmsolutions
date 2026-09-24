import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/blogs',
        destination: '/insights',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/insights',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/insights/:slug*',
        permanent: true,
      },
      {
        source: '/pos-case-studies',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/pos-case-studies/:slug*',
        destination: '/case-studies/:slug*',
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
