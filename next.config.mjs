/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // ✅ makes Next.js generate static HTML (for GitHub Pages)
  images: {
    unoptimized: true,         // ✅ disables Next.js image optimization (needed for static export)
  },
  trailingSlash: true          // ✅ optional: ensures internal links work correctly on GitHub Pages
};

export default nextConfig;
