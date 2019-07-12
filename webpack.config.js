const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

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

// webpackMerge(default, obj1, obj2)
module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
    return webpackMerge(
        {
            mode,
            module: {
                rules: [{ test: /\.jpe?g$/, use: "url-loader" }]
            },
            output: {
                filename: "bundle.js"
            },
            plugins: [
                new HtmlWebpackPlugin(),
                new webpack.ProgressPlugin(progressOptions)
            ]
        },
        modeConfig(mode)
    );
};
