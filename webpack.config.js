const webpack = require('webpack');
var path = require('path')
module.exports = {
  // devtool: 'eval-source-map',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    inline: true,
    host: 'localhost',
    port: 8081,
    historyApiFallback: true,
    compress: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015',
              'react'
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
            options: {
              modules: true,
              localIdentName: '[local]-[hash:base64:5]'
            }
          }, {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[local]-[hash:base64:5]'
            }
          }, {
            loader: "less-loader"
          }]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              modules: true,
              localIdentName: '[local]-[hash:base64:5]'
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]-[hash:base64:5]'
            }
          },
        ]
      }, {
        /* test: /\.(jpe?g|png|svg|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true
            }
          }
        ] */
      }
    ]
  },
  plugins: [
    /*  new webpack.optimize.UglifyJsPlugin({
       compress: {
         warnings: false
       }
     }), */
    new webpack.HotModuleReplacementPlugin()
  ]
}