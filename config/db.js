const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/rodtang-app';
const db = mongoose.connect(DB_URL);

module.exports = db;
