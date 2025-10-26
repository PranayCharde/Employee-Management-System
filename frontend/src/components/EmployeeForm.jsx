import { useEffect, useState } from 'react'

export default function EmployeeForm({ onAdd, editing, onUpdate }){
  const [form, setForm] = useState({ name: '', department: '', role: '' })

  useEffect(() => {
    if (editing) setForm({ name: editing.name, department: editing.department, role: editing.role })
  }, [editing])

  const submit = (e) => {
    e.preventDefault()
    if (editing) onUpdate(editing._id, form)
    else onAdd(form)
    setForm({ name: '', department: '', role: '' })
  }

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-2">{editing ? 'Edit Employee' : 'Add Employee'}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <input required placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="p-2 border rounded" />
        <input required placeholder="Department" value={form.department} onChange={e=>setForm({...form, department:e.target.value})} className="p-2 border rounded" />
        <input required placeholder="Role" value={form.role} onChange={e=>setForm({...form, role:e.target.value})} className="p-2 border rounded" />
      </div>
      <div className="mt-3">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition">{editing ? 'Update' : 'Add'}</button>
      </div>
    </form>
  )
}
