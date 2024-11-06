/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.builder.io', 'cdn.sanity.io'],
    loader: 'default',
  },
};

export default nextConfig;