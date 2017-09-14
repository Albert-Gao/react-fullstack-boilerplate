const webpack = require('webpack');
const paths = require('./paths');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoPrefixer = require('autoprefixer');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:9876',
        'webpack/hot/only-dev-server',
        './client/index.jsx',
    ],
    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].bundle.map.js',
        pathinfo: true,
        path: paths.appBuildAssetsScripts,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: '../media/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.(js|jsx)$/,
                include: paths.appSrc,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: [
                        ['env', {
                            modules: false
                        }], 'react'
                    ],
                    plugins: ['react-hot-loader/babel'],
                    ignore: [
                        'tests/',
                        'dist/',
                        'node_modules/',
                        'src/server/',
                        'src/client/static',
                        'public',
                    ],
                },
            },
            {
                test: /\.scss$/,
                include: paths.appSrc,
                use: ExtractTextPlugin.extract({})
                use: [
                    {
                        loader: require.resolve('style-loader'),
                        options: {
                            sourceMap: true
                        },
                    },
                    { loader: "file-loader" },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            sourceMap: true,
                            localIdentName: '[path]_[name]_[local]-[hash:base64:5]',
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            sourceMap: true,
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoPrefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                    {
                        loader: require.resolve('sass-loader'),
                        options: {
                            sourceMap: true
                        },
                    }
                ],
            },
        ],
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
        hot: true,
        contentBase: paths.appBuild,
        publicPath: '/',
        overlay: {
            warnings: true,
            errors: true,
        },
        proxy: {
            '/': 'http://localhost:5678',
        },
        port: 9876,
    },
    plugins: [
        new CleanWebpackPlugin(
            ['build'], {
                root: paths.appDirectory,
                verbose: true
            }),
        new HtmlWebpackPlugin({
            filename:'../../index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new WriteFilePlugin(),
        new CopyWebpackPlugin([
        // {
        //     from: paths.appStaticPages,
        //     to: paths.appBuild,
        // },
        // {
        //     from: paths.appAssets,
        //     to: paths.appBuildAssets,
        // },
        ]),
    ],
};
