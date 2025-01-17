import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
  remotePatterns:[
    {
      protocol:"https",
      hostname: "jorgeonsol.io"
    }
  ]
 }
};

export default nextConfig;
