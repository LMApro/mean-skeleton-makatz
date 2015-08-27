var express = require('express');
var path = require('path');
var router = express.Router();

router
	.get('/partials/*', function(req, res){
		res.render(path.join('..', '..', 'public', 'app', req.params['0']));
	})

	.get('*', function(req, res){
		res.render('index');
	});

module.exports = router;
