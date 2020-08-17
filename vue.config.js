module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/styles/utils/_variables.scss";`
			}
		}
	},
	devServer: {
		host: 'localhost',
		// proxy: 'http://localhost:3000',
		port: 3000
	},
};