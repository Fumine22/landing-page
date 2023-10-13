/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "logos-download.com", pathname: "/**" },
      { protocol: "https", hostname: "sktperfectdemo.com", pathname: "/**" },
      { protocol: "https", hostname: "themesglance.com", pathname: "/**" },
    ],
  },
};

module.exports = nextConfig;
