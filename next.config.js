// next.config.js

module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.node$/,
        use: 'raw-loader',
      });
      return config;
    },
  };
  