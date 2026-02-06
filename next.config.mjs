/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['mermaid-isomorphic', 'playwright', 'rehype-mermaid'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'localhost' },
      { protocol: 'https', hostname: 'odovey.com' },
    ],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
}

export default nextConfig
