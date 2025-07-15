import type { NextConfig } from 'next'
import path from 'node:path'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@/app': path.resolve(__dirname, 'src/app'),
      '@/core': path.resolve(__dirname, 'src/core'),
      '@/core/api': path.resolve(__dirname, 'src/core/api'),
      '@/core/providers': path.resolve(__dirname, 'src/core/providers'),
      '@/core/store': path.resolve(__dirname, 'src/core/store'),
      '@/shared': path.resolve(__dirname, 'src/shared'),
      '@/shared/ui': path.resolve(__dirname, 'src/shared/ui'),
      '@/shared/utils': path.resolve(__dirname, 'src/shared/utils'),
      '@/shared/styles': path.resolve(__dirname, 'src/shared/styles'),
      '@/shared/types': path.resolve(__dirname, 'src/shared/types'),
      '@/hooks': path.resolve(__dirname, 'src/shared/hooks'),
    }

    return config
  },
  trailingSlash: false,
  productionBrowserSourceMaps: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'src/shared/styles')],
  },
}

export default nextConfig
