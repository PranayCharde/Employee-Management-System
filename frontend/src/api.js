import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000'

export const api = axios.create({ baseURL: API_BASE + '/api' })

export const fetchEmployees = () => api.get('/employees')
export const addEmployee = (payload) => api.post('/employees', payload)
export const updateEmployee = (id, payload) => api.put(`/employees/${id}`, payload)
export const deleteEmployee = (id) => api.delete(`/employees/${id}`)
