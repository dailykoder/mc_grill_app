const repo = "/mc_grill_app";
import "./src/env.js";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/mc_grill_app" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/mc_grill_app/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
