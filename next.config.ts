import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
