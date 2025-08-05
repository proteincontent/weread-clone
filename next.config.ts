import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable React Strict Mode for better production behavior
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      // 禁用 webpack 的热模块替换
      config.watchOptions = {
        ignored: ['**/*'], // 忽略所有文件变化
      };
    }
    return config;
  },
  eslint: {
    // Catch ESLint errors during build for production deployment
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
