var path = require("path");

module.exports = {
    entry:
    {
        main: "./app/src/scripts/main.js",
        tabs: "./app/src/scripts/tabs.js"
    },
    output: {
        path: path.resolve(__dirname, "./app/dist/scripts"),
            filename: "[name].js"
        },
    module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
          
      }
        ]
    }
   
}