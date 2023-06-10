/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
