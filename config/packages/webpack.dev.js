const webpack = require('webpack');
const paths = require('./paths');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoPrefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:9876',
        'webpack/hot/only-dev-server',
        './client/index.jsx',
    ],
    output: {
        filename: 'static/js/bundle.js',
        sourceMapFilename: 'static/js/bundle.map.js',
        chunkFilename: 'static/js/[name].chunk.js',
        pathinfo: true,
        path: paths.appBuild,
        publicPath: '/',
        devtoolModuleFilenameTemplate: info =>
            path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),

    },
    resolve: {
        extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],
    },
    module: {
        rules: [
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.(js|jsx)$/,
                include: paths.appSrc,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: [['env', { modules: false }], 'react'],
                    plugins: [
                        'transform-object-rest-spread',
                        'transform-runtime',
                        'react-hot-loader/babel'],
                    ignore: [
                        'tests/',
                        'build/',
                        'config/',
                        'node_modules/',
                        'server/',
                        'public/',
                    ],
                },
            },
            {
                test: /\.scss$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: { importLoaders: 2 },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
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
                    require.resolve('sass-loader'),
                ],
            },
        ],
    },
    devtool: 'eval-source-map',
    devServer: {
        hot: true,
        contentBase: paths.appBuild,
        publicPath: '/',
        overlay: {
            warnings: true,
            errors: true,
        },
        proxy: { '/': 'http://localhost:5678' },
        port: 9876,
    },
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
    plugins: [
        new CleanWebpackPlugin(
            ['build'],
            {
                root: paths.appDirectory,
                verbose: true
            }
        ),
        new HtmlWebpackPlugin({ template: paths.appHtml }),
        new webpack.NamedModulesPlugin(),
        new WriteFilePlugin(),
        new CopyWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
};
