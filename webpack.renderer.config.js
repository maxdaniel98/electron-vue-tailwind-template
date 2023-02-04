// webpack.config.js
const { VueLoaderPlugin } = require('vue-loader')
const FileloaderPlugin = require('file-loader')
const VueStyleLoaderPlugin = require('vue-style-loader')

module.exports = {
    module: {
        rules: [
            // ... other rules
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.png|jpg|gif|svg$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files

            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                ]
            }
        ],
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
    ],
    resolve: {
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "zlib": false,
            "path": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "child_process": false,
        }
    },
    node: {
        __dirname: true
    }
}
