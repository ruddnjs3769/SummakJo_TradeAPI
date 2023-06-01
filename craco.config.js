const path = require('path')

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@public': path.resolve(__dirname, 'public')
		}
	}
}
