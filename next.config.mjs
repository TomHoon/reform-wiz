/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['localhost'], // add your hostname(s) here
  },
};

export default nextConfig;
