/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to a subpath, add:
  // basePath: '/dreamzero.github.io',
}

module.exports = nextConfig