import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // cacheComponents is off: this site is fully static, so its dynamic-IO rules
  // add build constraints (Suspense around every Date/clock read) for no gain.
  // partialPrefetching depends on it, so that goes too.
  images: {
    formats: ["image/avif", "image/webp"],
  },
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
