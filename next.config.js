const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
  // onDemandEntries: {
  // // period (in ms) where the server will keep pages in the buffer
  // maxInactiveAge: 25 * 1000,
  // // number of pages that should be kept simultaneously without being disposed
  // pagesBufferLength: 2,
  // },
  swcMinify: true,
  reactStrictMode: true,
  // images: {
  //   domains: [
  //     'i.scdn.co', // Spotify Album Art
  //     'pbs.twimg.com' // Twitter Profile Picture
  //   ]
  // },
  // webpack: (config, { dev, isServer }) => {
  //   // Replace React with Preact only in client production build
  //   if (!dev && !isServer) {
  //     Object.assign(config.resolve.alias, {
  //       react: 'preact/compat',
  //       'react-dom/test-utils': 'preact/test-utils',
  //       'react-dom': 'preact/compat'
  //     });
  //   }

  //   return config;
  // }
});
