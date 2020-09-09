const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = env => {

  return {
    entry: {
      app: './' + env.NODE_ENV + '/index.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "index.html",
        filename: "./index.html"
      })
    ]
  }
 
};