const webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	// devtool: 'eval-source-map',
	entry: path.resolve(__dirname, './src/index.tsx'),
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js',
		chunkFilename: '[name].js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		inline: true,
		host: 'localhost',
		port: 8081,
		historyApiFallback: true,
		compress: true,
		hot: true,
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:80'
			}
		}
	},
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
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
				use: [
					{
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
			template:'public/index.html'
		})
	]
};
