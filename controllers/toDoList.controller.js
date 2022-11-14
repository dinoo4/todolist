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
			const { id } = req.params;
			const toDo = await Todo.findById(id);
			const data = toDo;

			res.status(200).json({
				message: 'success get data by id',
				data,
			});
			return;
		} catch (error) {
			console.log(error);
		}
	},

	updateToDoById: async (req, res) => {
		try {
			const { id } = req.params;
			const toDo = await Todo.findById(id);
			const data = toDo;

			Object.assign(toDo, req.body);
			toDo.save();
			res.status(201).send({
				message: 'success update todo',
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},

	deleteToDoById: async (req, res) => {
		try {
			const { id } = req.params;
			const toDo = await Todo.findById(id);
			const data = toDo;

			if (!toDo) {
				res.status(404).json({
					message: 'Could not Found',
				});
			} else {
				toDo.deleteOne();
				res.json({ message: 'Data Deleted!' });
			}
		} catch (error) {
			console.log(error);
		}
	},

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
