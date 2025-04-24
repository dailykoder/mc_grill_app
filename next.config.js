const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = "mc_grill_app"; // Replace with your repo
import "./src/env.js";

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isGithubActions ? `/${repo}` : "",
  assetPrefix: isGithubActions ? `/${repo}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
