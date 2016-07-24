var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
	name: String,
	description: String,
	date: String
});

mongoose.model('Event', EventSchema);