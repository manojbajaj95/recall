/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   reactCompiler: true,
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
