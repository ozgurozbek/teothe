const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = {
  output: "export",
  experimental: {
    nextScriptWorkers: false,
  },
  // Next.js config options should be added here.
};
module.exports = withPWA(nextConfig);
