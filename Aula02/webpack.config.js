var path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {

    mode: "development",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "compiled.js"
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: [
                'vue-loader'
            ]
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}