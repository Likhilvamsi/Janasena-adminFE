/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.app',
      'voting-application-1.s3.us-east-1.amazonaws.com',
    ],
  },
}

module.exports = nextConfig
