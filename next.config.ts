import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
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
