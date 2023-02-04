// webpack.main.config.js
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = {
    entry: './src/index.js',
    module: {
        rules: []
    },
    plugins: [
        new NodePolyfillPlugin()
    ],
    resolve: {
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false
        }
    }
}
