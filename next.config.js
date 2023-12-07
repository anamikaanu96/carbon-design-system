/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  output: 'export',
  assetPrefix: './',
  images: {
    loader: 'imgix',
    path: '',
  },
};

module.exports = nextConfig;
