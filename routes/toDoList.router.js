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

router.post('/createToDo', verifyToken.verifyToken, createToDo);
router.get('/getAllToDo', verifyToken.verifyToken, getAllToDo);
router.get('/getToDoById/:id', verifyToken.verifyToken, getToDoById);
router.put('/updateToDoById:id', verifyToken.verifyToken, updateToDoById);
router.delete('/deleteToDoById:id', verifyToken.verifyToken, deleteToDoById);
router.delete('/deleteAllToDo', verifyToken.verifyToken, deleteAllToDo);

module.exports = router;
