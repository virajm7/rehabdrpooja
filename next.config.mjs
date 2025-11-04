/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // enables static export
  images: {
    unoptimized: true,     // needed for GitHub Pages
  },
  trailingSlash: true,     // ensures all URLs end with /
  distDir: 'out',          // ensures /out folder gets created
};

export default nextConfig;
