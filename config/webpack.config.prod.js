const webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},
	mode: 'production',
	devtool: false,
	entry: path.join(__dirname, '../', 'src/index.tsx'),
	output: {
		path: path.join(__dirname, '../', 'public'),
		filename: '[name].bundle.js',
		chunkFilename: '[id].bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	module: {
		rules: [{
				test: /\.tsx?$/,
				use: [{
						loader: 'babel-loader',
						options: {
							babelrc: true,
							plugins: ['react-hot-loader/babel'],
						},
					},
					'awesome-typescript-loader', // (or awesome-typescript-loader)
				],
			},
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
				test: /\.less|\.css$/,
				use: [{
					loader: 'style-loader',
					options: {
						modules: true,
						localIdentName: '[local]-[hash:base64:5]'
					}
				}, {
					loader: 'css-loader',
					options: {
						importLoaders: 3
					}
				}, {
					loader: 'postcss-loader'
				}, {
					loader: 'less-loader'
				}]
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
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../', 'index.html')
		}),
		// new webpack.IgnorePlugin(/react/)
	]
};
