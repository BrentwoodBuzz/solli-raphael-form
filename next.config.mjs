const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'solli-raphael-form'; // change to your repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGitHubPages ? `/${repo}` : '',
  assetPrefix: isGitHubPages ? `/${repo}/` : '',
  trailingSlash: true,
};

export default nextConfig;
