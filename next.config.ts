import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['example.com'], // ← أضف كل الدومينات التي تستخدم صورًا منها
  },
};

export default nextConfig;
