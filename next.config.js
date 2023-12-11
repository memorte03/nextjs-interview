const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },

  webpack: (config) => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
      ],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          'variables': path.resolve(__dirname, './src/styles/_variables.scss'),
        },
      },
    }
  }
}

module.exports = nextConfig;