var mongoose = require('mongoose');

module.exports = function(env) {
	if (env === 'development') {
		mongoose.connect('mongodb://localhost/mean');
	} else {
		// mongoose.connect(/* Connection String for Remote Data Storage */);
	}

	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'DB connection error...'));

	db.once('open', function(){
		console.log('DB open..');
	});
};