var mongoose = require('mongoose');

module.exports = function(env) {
	if (env === 'development') {
		mongoose.connect('mongodb://localhost/test');
	} else {
		// Need to reconfig
		mongoose.connect('mongodb://makatz:matn821309@ds033103.mongolab.com:33103/multivision');
	}

	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'DB connection error...'));

	db.once('open', function(){
		console.log('DB open..');
	});
};