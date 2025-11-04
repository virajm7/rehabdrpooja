// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ static export mode
  images: {
    unoptimized: true, // ✅ required for GitHub Pages (no Image Optimization)
  },
  trailingSlash: true, // ✅ helps with routing on static hosting
};

export default nextConfig;
