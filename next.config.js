const runtimeCaching = require('next-pwa/cache');
const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching,
});


const nextConfig = {
  output: "export",
  //images: { unoptimized: true }, // Error: Image Optimization using the default loader is not compatible with `{ output: 'export' }`. Next.js (13.5.6) is outdated.
  experimental: {
    nextScriptWorkers: false,
  },

  // Next.js config options should be added here.
};
module.exports = process.env.NODE_ENV === "development" ? nextConfig : withPWA(nextConfig); //Disables PWA on development, will throw [PWA] PWA support is disabled. See module.exports
