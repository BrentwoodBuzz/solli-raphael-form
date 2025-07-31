// next.config.mjs
const isGitHubPages = process.env.NODE_ENV === 'production';
const repo = 'solli-raphael-form'; // 🔁 change to your actual repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGitHubPages ? `/${repo}` : '',
  assetPrefix: isGitHubPages ? `/${repo}/` : '',
  trailingSlash: true,
};

export default nextConfig;
