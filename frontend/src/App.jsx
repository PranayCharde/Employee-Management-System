import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'
import Login from './components/Login'
import Footer from './components/Footer'
import { fetchEmployees, addEmployee, updateEmployee, deleteEmployee } from './api'

export default function App() {
  const [employees, setEmployees] = useState([])
  const [editing, setEditing] = useState(null)
  const [loading, setLoading] = useState(false)

  const load = async () => {
    setLoading(true)
    try {
      const res = await fetchEmployees()
      setEmployees(res.data)
    } catch (err) {
      console.error(err)
      // keep it subtle, real projects show non-intrusive toasts
    } finally { setLoading(false) }
  }

  useEffect(() => { load() }, [])

  const handleAdd = async (payload) => {
    try {
      const res = await addEmployee(payload)
      setEmployees((s) => [...s, res.data])
    } catch (err) { console.error(err) }
  }

  const handleUpdate = async (id, payload) => {
    try {
      const res = await updateEmployee(id, payload)
      setEmployees((s) => s.map(e => e._id === id ? res.data : e))
      setEditing(null)
    } catch (err) { console.error(err) }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this employee?')) return
    try {
      await deleteEmployee(id)
      setEmployees((s) => s.filter(e => e._id !== id))
    } catch (err) { console.error(err) }
  }

  return (
    <Router>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <div>
              <EmployeeForm onAdd={handleAdd} editing={editing} onUpdate={handleUpdate} />
              {loading ? <p>Loading...</p> : (
                <EmployeeList employees={employees} onEdit={setEditing} onDelete={handleDelete} />
              )}
            </div>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}
