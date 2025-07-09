/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imageio.forbes.com',
        port: '',
        pathname: '/specials-images/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com', // If you're still using Unsplash for some images
        port: '',
        pathname: '/**',
      },
      // Add other external image domains here if you use them
    ],
  },
};

module.exports = nextConfig;