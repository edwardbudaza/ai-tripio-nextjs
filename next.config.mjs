/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', "places.googleapis.com", "cdn.sanity.io"], // Add any other domains you need
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_GOOGLE_PLACE_API_KEY: process.env.GOOGLE_PLACE_API_KEY,
  },
}

export default nextConfig;
