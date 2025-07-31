// next.config.js
const isGitHubPages = process.env.NODE_ENV === 'production';
const repo = 'solli-raphael-form'; // 🔁 replace this with your actual repo name

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  basePath: isGitHubPages ? `/${repo}` : '',
  assetPrefix: isGitHubPages ? `/${repo}/` : '',
  trailingSlash: true,
};
