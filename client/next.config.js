// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pm-s3-images-final.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/**",
      }
    ]
  }
};

module.exports = nextConfig;
