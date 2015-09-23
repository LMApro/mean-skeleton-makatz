var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylusConfig = require('./stylus');

module.exports = function(app, config) {
	app.set('views', path.join(config.rootPath, 'server', 'views'));
	app.set('view engine', 'jade');
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	stylusConfig(app, config);
	app.use(express.static(path.join(config.rootPath, 'public')));
};
