const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'd2s72z9u9y9d6g.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = withVanillaExtract(nextConfig)
