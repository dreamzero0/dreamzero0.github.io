/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    trailingSlash: true,
    unoptimized: true,
  },
};

export default nextConfig;
