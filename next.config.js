/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.bbf-bike.de'],
  },
}

module.exports = nextConfig
