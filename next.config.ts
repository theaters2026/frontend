import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'localhost',
      ...(process.env['NEXT_PUBLIC_PRODUCTION_DOMAIN']
        ? [process.env['NEXT_PUBLIC_PRODUCTION_DOMAIN']]
        : []),
    ],

    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/static/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: '**.your-cdn.com',
      },
    ],

    minimumCacheTTL: 60,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': `${__dirname}/src`,
      '@components': `${__dirname}/src/components`,
    }

    return config
  },

  trailingSlash: false,
  productionBrowserSourceMaps: true,
}

export default nextConfig
