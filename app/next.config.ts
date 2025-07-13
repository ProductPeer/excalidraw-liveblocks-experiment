import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@excalidraw/excalidraw"],
  webpack: (config) => {
    config.externals.push({
      "canvas": "canvas",
    });
    return config;
  },
};

export default nextConfig;
