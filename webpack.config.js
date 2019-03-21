var path = require("path");

module.exports = {
    entry: "./app/src/scripts/App.js",
        output: {
            path: path.resolve(__dirname, "./app/dist/scripts"),
            filename: "App.js"
        }
}