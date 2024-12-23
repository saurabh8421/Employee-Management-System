const mongoose = require('mongoose');
const leaveRequestSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  reason: String,
  date: Date,
  status: { type: String, default: 'Pending' },
});
module.exports = mongoose.model('LeaveRequest', leaveRequestSchema);