/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["le-de.cdn-website.com"],
  },
};

module.exports = nextConfig;
