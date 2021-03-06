const path = require("path");

const babelLoaderConfiguration = {
	test: /\.js$/,
	// Add every directory that needs to be compiled by Babel during the build
	include: [
		path.resolve(__dirname, "../AppWeb.js"),
		path.resolve(__dirname, "../App.js"),
		path.resolve(__dirname, "../MyApp.js"),
		path.resolve(__dirname, "../UIField"),
		path.resolve(__dirname, "../Theme"),
		path.resolve(__dirname, "../rules"),
		path.resolve(__dirname, "../NativeComponents"),
		path.resolve(__dirname, "../MyForm"),
	],
	use: {
		loader: "babel-loader",
		options: {
			cacheDirectory: true,
			// This aliases 'react-native' to 'react-native-web' and includes only
			// the modules needed by the app
			plugins: ["react-native-web/babel"],
			// The 'react-native' preset is recommended (or use your own .babelrc)
			presets: ["react-native"],
		},
	},
};

// This is needed for webpack to import static images in JavaScript files
const imageLoaderConfiguration = {
	test: /\.(gif|jpe?g|png|svg)$/,
	use: {
		loader: "url-loader",
		options: {
			name: "[name].[ext]",
		},
	},
};

module.exports = {
	imageLoaderConfiguration,
	babelLoaderConfiguration,
};
