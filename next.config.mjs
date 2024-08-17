/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', "places.googleapis.com"], // Add any other domains you need
  },
  env: {
    NEXT_PUBLIC_GOOGLE_PLACE_API_KEY: process.env.GOOGLE_PLACE_API_KEY,
  },
}

export default nextConfig;
