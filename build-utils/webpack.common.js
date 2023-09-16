// default configurations
const path = require('path');
// const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    // Entry point, from where all extraction should be made
    entry: './src/index.js',
    // Init webpack rules to collect js, jsx, css files
    module: {
        rules: [
            {
                // Extract and Transpile ES6+ in to ES5 
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                // Image loader
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true,
                        },
                    },
                ],
            },
            {
                // Extract CSS files
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
        ]
    },
    // https://webpack.js.org/configuration/output/
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'widget.js',
        chunkFilename: 'widget.chunk.js',
        // Output library name
        library: 'RaasWidget',
        libraryTarget: 'umd',
        publicPath: '/',
        libraryExport: 'default',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    // https://webpack.js.org/configuration/plugins/
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: './index.html',
            favicon: './public/favicon.ico',
            inject: 'head',
            scriptLoading: 'blocking'
        }),
        new MiniCssExtractPlugin({
            filename: "widget.css",
            chunkFilename: "widget.css"
        }),
    ],
    // https://webpack.js.org/configuration/optimization/
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                        comparisons: false
                    },
                    mangle: {
                        safari10: true
                    },
                    output: {
                        comments: false,
                        ascii_only: true
                    },
                    
                },
                extractComments: false,
            })
        ],
    },

}