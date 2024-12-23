const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// Create Project
router.post('/', async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

// Get All Projects
router.get('/', async (req, res) => {
  const projects = await Project.find().populate('employees');
  res.json(projects);
});

// Update Project
router.put('/:id', async (req, res) => {
  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedProject);
});

// Delete Project
router.delete('/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: 'Project deleted' });
});

module.exports = router;