/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.unsplash.com",
      },

      {
        protocol: "https",
        hostname: "github.com",
      },

      {
        protocol: "http",
        hostname: "localhost",
      },

      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "stablo-template.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
