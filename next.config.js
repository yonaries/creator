/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "file-examples.com/",
      },
      {
        protocol: "https",
        hostname: "github.com/",
      },
    ],
  },
};

module.exports = nextConfig;
