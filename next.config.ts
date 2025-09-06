import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      { source: "/washcamuz", destination: "/", permanent: true },
      { source: "/washcam-uz", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
