const express = require('express');
const LeaveRequest = require('../models/LeaveRequest');
const router = express.Router();

// Apply for Leave
router.post('/', async (req, res) => {
  const leave = new LeaveRequest(req.body);
  await leave.save();
  res.json(leave);
});

// View All Leave Requests
router.get('/', async (req, res) => {
  const leaves = await LeaveRequest.find().populate('employeeId');
  res.json(leaves);
});

// Update Leave Status (Approve/Reject)
router.put('/:id', async (req, res) => {
  const updatedLeave = await LeaveRequest.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(updatedLeave);
});

module.exports = router;