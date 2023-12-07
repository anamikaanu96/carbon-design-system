/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  output: 'export',
  assetPrefix: './',
  images: {
    loader: 'custom',
    loaderFile: './my-loader.ts',
  },
};

module.exports = nextConfig;
