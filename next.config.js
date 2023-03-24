/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_SUPABASE_DOMAIN],
  },
}

module.exports = nextConfig
