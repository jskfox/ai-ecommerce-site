/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'tecnoplanet.mx',
      },
      {
        protocol: 'https',
        hostname: 'images.samsung.com',
      },
      {
        protocol: 'https',
        hostname: 'www.lg.com',
      },
      {
        protocol: 'https',
        hostname: 'dji-official-fe.djicdn.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'store.storeimages.cdn-apple.com',
      },
      {
        protocol: 'https',
        hostname: 'www.sony.com',
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
