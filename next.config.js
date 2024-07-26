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
        protocol: "http",
        hostname: "*", // Permite qualquer hostname com http
      },
      {
        protocol: "https",
        hostname: "*", // Permite qualquer hostname com https
      },
    ],
  },
};

module.exports = nextConfig;
