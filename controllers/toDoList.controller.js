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

	getToDoById: async (req, res) => {
		try {
			// const { _id } = req.params.todolist.Id;
			// const toDo = await Todo.findById({ _id });
			const toDo = await Todo.findById(req.params._id, '-__v');
			const data = toDo;
			console.log(data);

			res.status(200).json({
				message: 'success get data by id',
				data,
			});
			return;
		} catch (error) {
			console.log(error);
		}
	},

	updateToDoById: (req, res) => {},

	deleteToDoById: (req, res) => {},

	deleteAllToDo: async (req, res) => {
		try {
			const toDo = await Todo.deleteMany();

			res.json({
				message: 'success delete all todo',
				data: toDo,
			});
			return;
		} catch (error) {
			console.log(error);
		}
	},
};
