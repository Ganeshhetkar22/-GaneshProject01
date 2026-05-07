/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: false, // Disable CSS optimization to avoid critters issues
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  output: 'export', // Enable static export for Netlify
  trailingSlash: true, // Required for static export
};

module.exports = nextConfig;
