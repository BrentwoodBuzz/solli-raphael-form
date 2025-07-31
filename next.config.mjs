const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'solli-raphael-form';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGitHubPages ? `/${repo}` : '',
  assetPrefix: isGitHubPages ? `/${repo}/` : '',
  trailingSlash: true,
};

export default nextConfig;
