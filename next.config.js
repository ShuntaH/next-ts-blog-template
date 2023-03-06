/**
 * https://nextjs.org/docs/basic-features/typescript#type-checking-nextconfigjs
 */
// @ts-check


/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false
  }
};

module.exports = nextConfig;
