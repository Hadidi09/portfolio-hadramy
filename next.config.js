/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

module.exports = nextConfig;
// module.exports = {
//   reactStrictMode: true,
//   swcMinify: true,
// };
