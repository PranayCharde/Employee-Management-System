import { Link } from 'react-router-dom'
export default function Navbar(){
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-emerald-500 text-white p-4 shadow">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="font-semibold text-lg">Employee Portal</div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Dashboard</Link>
          <Link to="/login" className="hover:underline">Sign In</Link>
        </div>
      </div>
    </nav>
  )
}
