const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: './index.js',
	output: {
		path: path.join(__dirname, 'lib'),
		filename: 'megazord-components.min.js',
		libraryTarget: 'umd',
		library: '@megazord/components'
	},
	plugins: [new CleanWebpackPlugin()],
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.(js|jsx)$/,
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {},
					},
				],
			},
		]
	},
	externals: {
 		react: 'react',
	},
	devServer: {
		contentBase: [path.join(__dirname, 'src'), path.join(__dirname, 'lib')]
	}
};
