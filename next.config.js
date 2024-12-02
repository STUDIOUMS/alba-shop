/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://api.alba-72.ru/api/v1",
  },
  images: {
    localPatterns: [
      {
        pathname: "/assets/**",
        search: "",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.alba-72.ru",
        port: "",
        pathname: "/media/images/**",
        search: "",
      },
    ],
  },
};

module.exports = nextConfig;
