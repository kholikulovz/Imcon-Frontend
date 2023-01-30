/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@acme/ui', 'lodash-es'],
}

module.exports = nextConfig
