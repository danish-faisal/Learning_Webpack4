const { dirname } = require("path");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
}

// npx webpack -> will look for 'webpack.config.js' config file and generate bundle accordingly

// to use custom config file name -> "npx webpack --config my.custom.webpack.config.js"