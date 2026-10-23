import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'diabetes.co.in',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async redirects() {
    return [
      {
        source: '/events',
        destination: '/#events',
        permanent: true,
      },
      {
        source: '/gallery',
        destination: '/#gallery',
        permanent: true,
      },
      {
        source: '/before-and-after',
        destination: '/#patient-results',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
