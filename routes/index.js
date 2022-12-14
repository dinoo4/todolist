const express = require('express');
const router = express.Router();

const userRouter = require('./user.router');
const toDoList = require('./toDoList.router');

router.use('/user', userRouter);
router.use('/toDoList', toDoList);

module.exports = router;
