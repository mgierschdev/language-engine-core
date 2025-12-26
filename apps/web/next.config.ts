import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@le/core", "@le/plugin-de", "@le/content"],
};

export default nextConfig;
