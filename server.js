var app = require('express')();

var config = {
	rootPath: __dirname,
	port: process.env.PORT || 13091,
	env: process.env.NODE_ENV || 'development'
};

// express middlewares
require('./server/config/express')(app, config);

// mongodb
require('./server/config/mongo')(config.env);

// routes
app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/error'));

// error handlers
require('./server/config/error-handlers')(app);

app.listen(config.port, function(){
	console.log("Listening on port: " + config.port);
});