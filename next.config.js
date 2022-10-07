/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@madzadev/image-slider"]);

module.exports = withImages(withTM());

module.exports = nextConfig

const withVideos = require('next-videos')
module.exports = withVideos()

module.exports = {
  images: {
    domains: ['d5mhdc97neilw.cloudfront.net'],
  },
}
