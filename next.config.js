/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    API_URL: 'https://api-csd-vietnam.onrender.com/',
  },
};

module.exports = nextConfig;
