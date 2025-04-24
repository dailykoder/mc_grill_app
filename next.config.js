const repo = "/mc_grill_app"; // Replace with your repo
import "./src/env.js";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: repo,
  // assetPrefix: isGithubActions ? `/${repo}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
