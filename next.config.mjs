const repo = 'solli-raphael-form';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
};

module.exports = nextConfig;
