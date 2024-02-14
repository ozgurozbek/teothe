const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = {
  output: "standalone", //Optimization in Calendar fails in Export, hence to be able to build...
  experimental: {
    nextScriptWorkers: false,
  },
  // Next.js config options should be added here.
};
module.exports = withPWA(nextConfig);
