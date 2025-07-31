const repo = 'solli-raphael-form'; // 🔁 Replace with your GitHub repo name

module.exports = {
  output: 'export', // for static export
  basePath: isGitHubPages ? `/${repo}` : '',
  assetPrefix: isGitHubPages ? `/${repo}/` : '',
  trailingSlash: true,
};