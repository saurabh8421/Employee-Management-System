const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
});
module.exports = mongoose.model('Project', projectSchema);