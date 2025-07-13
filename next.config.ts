import type { NextConfig } from 'next'
import path from 'node:path'

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
      '@': path.resolve(__dirname, 'src'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@app/components': path.resolve(__dirname, 'src/app/components'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@core/api': path.resolve(__dirname, 'src/core/api'),
      '@core/providers': path.resolve(__dirname, 'src/core/providers'),
      '@core/store': path.resolve(__dirname, 'src/core/store'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@shared/components': path.resolve(__dirname, 'src/shared/components'),
      '@shared/lib': path.resolve(__dirname, 'src/shared/lib'),
      '@shared/types': path.resolve(__dirname, 'src/shared/types'),
      '@shared/styles': path.resolve(__dirname, 'src/shared/styles'),
      '@shared/utils': path.resolve(__dirname, 'src/shared/lib/utils'),
      '@ui': path.resolve(__dirname, 'src/shared/components/ui'),
      '@api': path.resolve(__dirname, 'src/core/api'),
    }

    return config
  },
  trailingSlash: false,
  productionBrowserSourceMaps: true,
}

export default nextConfig
