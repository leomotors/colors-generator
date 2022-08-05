/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-prism")],
  },
});

/** @type {import("next").NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});

module.exports = nextConfig;
