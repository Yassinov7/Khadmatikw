import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      { source: "/iptv/world-cup", destination: "/football/world-cup", permanent: true },
      { source: "/iptv/premier-league", destination: "/football/premier-league", permanent: true },
      { source: "/iptv/la-liga", destination: "/football/la-liga", permanent: true },
      { source: "/iptv/serie-a", destination: "/football/serie-a", permanent: true },
      { source: "/iptv/bundesliga", destination: "/football/bundesliga", permanent: true },
      { source: "/iptv/kuwait-league", destination: "/football/kuwait-league", permanent: true },
      { source: "/iptv/saudi-league", destination: "/football/saudi-league", permanent: true },
      { source: "/iptv/uae-league", destination: "/football/uae-league", permanent: true },
      { source: "/iptv/qatar-league", destination: "/football/qatar-league", permanent: true },
    ];
  },
  images: {
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
