/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'i.imgur.com'],
  },
  future: { webpack5: true },
};

module.exports = nextConfig;
