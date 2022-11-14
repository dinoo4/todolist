const mongoose = require('mongoose');
const { Schema } = mongoose;

const toDoListSchema = new Schema({
	activity: String,
	description: String,
	user: {
		type: Object,
		ref: 'user',
	},
});

const toDoList = mongoose.model('toDoList', toDoListSchema);

module.exports = toDoList;
