import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/authService'

export default function PatientLogin(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  async function handleLogin(e){
    e.preventDefault()
    const res = await login({ email, password })
    if (res.ok){ navigate('/dashboard') } else { setError('Invalid credentials') }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded">
      <h2 className="text-xl font-semibold mb-4">Patient Login</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <form onSubmit={handleLogin} className="space-y-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} className="border p-2 rounded w-full" placeholder="Email" />
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className="border p-2 rounded w-full" placeholder="Password" />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
      </form>
    </div>
  )
}
