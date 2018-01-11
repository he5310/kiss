const webpack = require('webpack');
module.exports = {
  // devtool: 'eval-source-map',
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: `${__dirname}/dist`,
    inline: true,
    host:'localhost',
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
        exclude: '/node_modules/'
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: {
            modules: true
          }
        }, {
          loader: "less-loader"
        }]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
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