const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const paths = require('./paths');

if (process.env.NODE_ENV !== 'production') {
    throw new Error('Must be set NODE_ENV to production');
}

// Webpack uses `publicPath` to determine where the app is being served from.
// It requires a trailing slash, or the file assets will get an incorrect path.
const publicPath = './'; // paths.servedPath;

// Some apps do not use client-side routing with pushState.
// For these, "homepage" can be set to "." to enable relative asset paths.
const shouldUseRelativeAssetPaths = publicPath === './';

// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_URL%/xyz looks better than %PUBLIC_URL%xyz.
const publicUrl = publicPath.slice(0, -1);

// Note: defined here because it will be used more than once.
const cssFilename = 'static/css/[name].[contenthash:8].css';

// ExtractTextPlugin expects the build output to be flat.
// (See https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/27)
// However, our output is structured with css, js and media folders.
// To have this structure working with relative paths, we have to use custom options.
const extractTextPluginOptions = shouldUseRelativeAssetPaths
    ? // Making sure that the publicPath goes back to to build folder.
    { publicPath: Array(cssFilename.split('/').length).join('../') }
    : {};

module.exports = {
    bail: true,
    devtool: 'source-map',
    entry: [paths.appIndexJs],

    output: {
        path: paths.appBuild,
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
        publicPath: publicPath,
        devtoolModuleFilenameTemplate: info =>
            path.relative(paths.appSrc, info.absoluteResourcePath).replace(/\\/g, '/')
    },
    resolve: {
        extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx']
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.scss$/,
                    /\.json$/,
                    /\.bmp$/,
                    /\.gif$/,
                    /\.jpe?g$/,
                    /\.png$/
                ],
                loader: require.resolve('file-loader'),
                options: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.(js|jsx)$/,
                include: paths.appSrc,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    compact: true,
                    cacheDirectory: true,
                    presets: [['env', { modules: false }], 'react'],
                    plugins: [
                        'transform-object-rest-spread',
                        'transform-runtime'
                    ],
                    ignore: [
                        'tests/',
                        'build/',
                        'config/',
                        'node_modules/',
                        'server/',
                        'public/'
                    ]
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    Object.assign(
                        {
                            fallback: require.resolve('style-loader'),
                            use: [
                                {
                                    loader: require.resolve('css-loader'),
                                    options: {
                                        importLoaders: 2,
                                        minimize: true,
                                        sourceMap: true
                                    }
                                },
                                {
                                    loader: require.resolve('postcss-loader'),
                                    options: {
                                        ident: 'postcss',
                                        plugins: () => [
                                            require('postcss-flexbugs-fixes'),
                                            autoprefixer({
                                                browsers: [
                                                    '>1%',
                                                    'last 4 versions',
                                                    'Firefox ESR',
                                                    'not ie < 9' // React doesn't support IE8 anyway
                                                ],
                                                flexbox: 'no-2009'
                                            })
                                        ]
                                    }
                                },
                                require.resolve('sass-loader')
                            ]
                        },
                        extractTextPluginOptions
                    )
                )
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            ['build'],
            {
                root: paths.appDirectory,
                verbose: true
            }
        ),
        new ExtractTextPlugin({
            filename: cssFilename
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                comparisons: false
            },
            output: {
                comments: false,
                ascii_only: true
            },
            sourceMap: true
        })
    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
