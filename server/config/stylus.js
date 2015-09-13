var stylus = require('stylus');

module.exports = function(app, config) {
	app.use(stylus.middleware({
		src: config.rootPath + '/public',
		compile: function compile(src, dir) {
			return stylus(src)
				.set('filename', dir)
				.set('compress', true);
		}
	}));
};
