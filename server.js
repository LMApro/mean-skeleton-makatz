var app = require('express')();

var config = {
	rootPath: __dirname,
	port: process.env.PORT || 1309,
	env: process.env.NODE_ENV || 'development'
};

require('./server/config/express')(app, config);
require('./server/config/mongo')(config.env);

// routes
app.use('/', require('./server/routes/main'));

app.listen(config.port, function(){
	console.log("Listening on port: " + config.port);
});