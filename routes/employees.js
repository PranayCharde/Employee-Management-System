const express = require('express')
const router = express.Router()
const Employee = require('../models/Employee')

// GET /api/employees
router.get('/', async (req, res) => {
  const list = await Employee.find().sort({ createdAt: -1 })
  res.json(list)
})

// POST /api/employees
router.post('/', async (req, res) => {
  try {
    const emp = new Employee(req.body)
    await emp.save()
    res.status(201).json(emp)
  } catch (err) { res.status(400).json({ error: err.message }) }
})

// PUT /api/employees/:id
router.put('/:id', async (req, res) => {
  try {
    const emp = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(emp)
  } catch (err) { res.status(400).json({ error: err.message }) }
})

// DELETE /api/employees/:id
router.delete('/:id', async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({ success: true })
  } catch (err) { res.status(400).json({ error: err.message }) }
})

module.exports = router
