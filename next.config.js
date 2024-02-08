// next.config.js

module.exports = {
    images: {
        domains: ["lh3.googleusercontent.com"],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.node$/,
            use: "raw-loader",
        });
        return config;
    },
};
