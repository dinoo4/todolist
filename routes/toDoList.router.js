const express = require('express');
const router = express.Router();

const {
	createToDo,
	getAllToDo,
	getToDoById,
	updateToDoById,
	deleteToDoById,
	deleteAllToDo,
} = require('../controllers/toDoList.controller');

const verifyToken = require('../routes/verifyToken');

router.post('/createToDo', verifyToken, createToDo);
router.get('/getAllToDo', verifyToken, getAllToDo);
router.get('/getToDoById:id', verifyToken, getToDoById);
router.put('/updateToDoById:id', verifyToken, updateToDoById);
router.delete('/deleteToDoById:id', verifyToken, deleteToDoById);
router.delete('/deleteAllToDo', verifyToken, deleteAllToDo);

module.exports = router;
