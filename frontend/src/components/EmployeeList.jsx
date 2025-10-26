export default function EmployeeList({ employees, onEdit, onDelete }){
  if (!employees.length) return <p className="text-gray-500">No employees</p>
  return (
    <div className="overflow-x-auto bg-white rounded shadow">
      <table className="w-full min-w-[700px]">
        <thead className="bg-gray-50 text-left">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Department</th>
            <th className="p-3">Role</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(e => (
            <tr key={e._id} className="border-t">
              <td className="p-3">{e.name}</td>
              <td className="p-3">{e.department}</td>
              <td className="p-3">{e.role}</td>
              <td className="p-3">
                <button onClick={()=>onEdit(e)} className="mr-2 px-3 py-1 bg-yellow-400 rounded">Edit</button>
                <button onClick={()=>onDelete(e._id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
