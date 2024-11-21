/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    taint: true,
  },
}

module.exports = nextConfig
