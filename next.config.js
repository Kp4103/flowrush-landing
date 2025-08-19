const nextConfig = {
  experimental: {
    turbo: {},
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  async rewrites() {
    return [
      {
        source: '/logos/:path*',
        destination: '/LOGOS/:path*',
      },
    ]
  },
}

module.exports = nextConfig
