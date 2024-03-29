const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  name: String,
  lastname: String,
  address: String,
  age: Number,
  nickname: String,
  password: String,
  status: {
    type: Boolean,
    default: false,
  }
});

module.exports = mongoose.model('task', TaskSchema);
