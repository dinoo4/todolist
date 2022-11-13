const Todo = require('../models/toDoList');

module.exports = {
	createToDo: (req, res) => {
		try {
			const data = req.body;
			const toDo = new Todo(data);
			toDo.save();

			res.json({
				message: 'Success create to do',
			});
		} catch (error) {
			console.log(error);
		}
	},

	getAllToDo: async (req, res) => {
		try {
			const toDo = await Todo.find();

			res.json({
				message: 'success get All To Do',
				data: toDo,
			});
			return;
		} catch (error) {
			console.log(error);
		}
	},

	getToDoById: (req, res) => {},

	updateToDoById: (req, res) => {},

	deleteToDoById: (req, res) => {},

	deleteAllToDo: (req, res) => {},
};
