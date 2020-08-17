module.exports = {
	publicPath: '',
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/styles/utils/_variables.scss";`
			}
		}
	},
	devServer: {
		host: 'localhost',
		port: 3000
	},
};