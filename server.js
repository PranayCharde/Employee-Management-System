require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const employeeRoutes = require('./routes/employees')
app.use('/api/employees', employeeRoutes)

const PORT = process.env.PORT || 5000
const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/employee_portal'

mongoose.connect(MONGO)
  .then(()=>{
    console.log('Mongo connected')
    app.listen(PORT, ()=> console.log('Server running on', PORT))
  })
  .catch(err=>{ console.error('DB connect error', err) })
