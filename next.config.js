/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.math.hkbu.edu.hk", "picsum.photos"],
  },
};

module.exports = nextConfig;
