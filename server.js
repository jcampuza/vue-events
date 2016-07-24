var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

// App config
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Database config
var mongoUri = 'mongodb://localhost/vue-app';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function() {
	throw new Error('unable to connect to database at ' + mongoUri);
});

require('./models/event');
require('./routes')(app);

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App running on port", port);
});

