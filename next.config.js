/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'via.placeholder.com',
    ],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
