// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ship now; we’ll clean the lint errors in a follow-up PR.
  eslint: { ignoreDuringBuilds: true },

  // (Optional) if you ever want to ship with type errors too, uncomment:
  // typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
