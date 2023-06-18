/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    FIREBASE_API_KEY: "AIzaSyAe8_bIOEmO2KToTJVv85r-kcOGvHuE1WQ",
    FIREBASE_AUTH_DOMAIN: "jegool.firebaseapp.com",
    FIREBASE_PROJECT_ID: "jegool",
    FIREBASE_STORAGE_BUCKET: "jegool.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "496117211666",
    FIREBASE_APP_ID: "1:496117211666:web:6a58041edcff3e5c1deecb",
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
