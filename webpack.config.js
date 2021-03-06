const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'production', // 'development' https://webpack.js.org/configuration/mode/

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'jquery.nouislider-range-input.js',
        libraryTarget: 'umd',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },

    plugins: [
        // new webpack.BannerPlugin({
        // banner: `${pkg.name}\n${pkg.version}\nTested with jQuery 1.12+\n${pkg.repository.url}\nLicense: ${pkg.license}`,
        // }),
        // new UglifyJsPlugin({
        // beautify: true,
        // mangle: false,
        // }),
    ],

    externals: {
        jquery: {
            commonjs: 'jquery',
            commonjs2: 'jquery',
            amd: 'jquery',
            root: 'jQuery',
        },
        nouislider: 'nouislider',
        wnumb: 'wnumb',
    },
};
