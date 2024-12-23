const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  birthday: Date,
  gender: String,
  contact: String,
  nid: Number,
  address: String,
  department: String,
  degree: String,
  performance: Number,
  salary:String,
  projects: [String]
});
module.exports = mongoose.model('Employee', employeeSchema);
