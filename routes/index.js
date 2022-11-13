const express = require('express');
const router = express.Router();

const userRouter = require('./user.router');
const toDoList = require('./toDoList.router');
const verifyToken = require('./verifyToken');

router.use('/user', userRouter);
router.use('/toDoList', toDoList);
router.use('/verifyToken', verifyToken);

module.exports = router;
