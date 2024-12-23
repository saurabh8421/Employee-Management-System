const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();

router.post('/', async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.json(employee);
});

router.get('/', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

router.put('/:id', async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employee deleted' });
});

module.exports = router;
