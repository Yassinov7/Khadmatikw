import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['example.com'],
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vmoefeynkbamrnkpeaux.supabase.co',
        pathname: '/storage/v1/object/public/**'
      },
     ],
  },
};

export default nextConfig;
