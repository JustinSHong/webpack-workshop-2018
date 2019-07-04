const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const progressOptions = {
    activeModules: true,
    entries: false,
    modules: true,
    modulesCount: 100,
    profile: true,
    handler: (percentage, message, ...args) => {
        console.info(percentage * 100, message, ...args);
    }
};

module.exports = env => {
    return {
        mode: env.mode,
        output: {
            filename: "bundle.js"
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new webpack.ProgressPlugin(progressOptions)
        ]
    };
};
