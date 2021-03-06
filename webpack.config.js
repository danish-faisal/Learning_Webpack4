const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    // entry: {
    //     about: "./src/about.js",
    //     contact: "./src/contact.js"
    // },
    output: {
        filename: "main.js",
        // filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        minimizer: [new UglifyJsPlugin()]
    },
    plugins: [new HtmlWebpackPlugin()],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    { loader: "url-loader" }
                ]
            }
        ]
    }
}

// npx webpack -> will look for 'webpack.config.js' config file and generate bundle accordingly

// to use custom config file name -> "npx webpack --config my.custom.webpack.config.js"

// HtmlWebpackPlugin to create only one bundled .html & .js file

// Optimization/Splitchunks -> to have common code in multipe js files moved to one vendor file

// different loaders -> to load dependencies only when & which are required

// Uglifyjs Webpack plugin -> to get the most optimized production build