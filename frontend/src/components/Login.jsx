import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [form, setForm] = useState({ email:'', password:'' })
  const navigate = useNavigate()
  const submit = (e)=>{
    e.preventDefault()
    // static demo login - accepts any non-empty credentials
    if (!form.email || !form.password) return alert('Enter credentials')
    // mimic authentication flow then redirect
    localStorage.setItem('employee_portal_user', JSON.stringify({ email: form.email }))
    navigate('/')
  }
  return (
    <div className="max-w-sm mx-auto mt-12">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Sign in to Employee Portal</h2>
        <form onSubmit={submit} className="space-y-3">
          <input className="w-full p-2 border rounded" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
          <input type="password" className="w-full p-2 border rounded" placeholder="Password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} />
          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded">Sign in</button>
        </form>
        <p className="text-xs text-gray-400 mt-3">Demo login — no real authentication.</p>
      </div>
    </div>
  )
}
