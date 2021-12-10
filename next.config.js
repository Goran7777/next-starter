const path = require('path');
const withSass = require('@zeit/next-sass');
module.exports = {
  reactStrictMode: true,
};
module.exports = {
  swcMinify: true,
};
module.exports = withSass({
  cssModules: true,
});
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
