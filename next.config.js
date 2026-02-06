/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'odovey.com'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static export
  trailingSlash: true, // Ensures proper routing for static hosting
  distDir: 'out', // Output directory for static files
}

module.exports = nextConfig
