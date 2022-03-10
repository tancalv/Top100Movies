const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "Top100Movies/static/Top100Movies", "movie_list.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  plugins: [
	new HtmlWebpackPlugin({
		template: path.join(__dirname, "Top100Movies/templates/Top100Movies", "add_movie.html")
	})
]
}

