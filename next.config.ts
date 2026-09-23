import type { NextConfig } from "next";

// ponytail: static export only. No server, no images to optimize.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
