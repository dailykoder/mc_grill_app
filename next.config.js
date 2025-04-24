const repo = "/mc_grill_app";
import "./src/env.js";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: repo,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
