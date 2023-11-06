/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    nextScriptWorkers: false,
  },
};
module.exports = nextConfig;
