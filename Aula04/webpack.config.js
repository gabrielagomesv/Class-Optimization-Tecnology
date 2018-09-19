const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output:{
        path: path.resolve("./dist/"),
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets:[
                        '@babel/react'
                    ]
                },
            }
        ]
    },
    resolve:{
        extensions: ['*', '.js', '.jsx']
    }
};

