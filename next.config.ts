import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /cv always points at the current PDF in /public. Temporary (307) so the target can change.
  async redirects() {
    return [{ source: "/cv", destination: "/Kasun_Rathnayaka_CV.pdf", permanent: false }];
  },
  // The site is fully static, so Cache Components / partial prefetching are
  // left off (the scaffold enabled them by default). Revisit if we ever add
  // dynamic data.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
