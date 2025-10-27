import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"], // ✅ Use modern image formats
    minimumCacheTTL: 60,
  },

  // ✅ Add browser caching headers for static pages
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/:path*", // apply to all routes
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=300, s-maxage=600, must-revalidate",
            // cache for 5 min on browser, 10 min on CDN
          },
        ],
      },
    ];
  },
};

export default nextConfig;
