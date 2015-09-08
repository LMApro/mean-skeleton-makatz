var stylus = require('stylus');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

module.exports = function(app, config) {
	app.set('views', path.join(config.rootPath, 'server', 'views'));
	app.set('view engine', 'jade');
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(stylus.middleware({
		src: config.rootPath + '/public',
		compile: function compile(src, dir) {
			return stylus(src).set('filename', dir);
		}
	}));

	app.use(cookieParser());
	app.use(express.static(path.join(config.rootPath, 'public')));
};
