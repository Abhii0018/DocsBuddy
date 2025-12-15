import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="site-header sticky top-0 z-40">
      <div className="container mx-auto px-6 py-3 flex items-center">
        <div className="flex items-center" style={{ gap: 14 }}>
          <Link to="/" className="flex items-center gap-3">
            <img src="/src/assets/logo.svg" alt="DocsBuddy" className="h-10 w-10"/>
            <span className="font-semibold text-lg">DocsBuddy</span>
          </Link>
        </div>

        <nav className="ml-auto flex items-center gap-8 text-sm text-gray-600">
          <Link className="hover:text-gray-900" to="/">Home</Link>
          <Link className="hover:text-gray-900" to="/dashboard">Dashboard</Link>
          <Link className="hover:text-gray-900" to="/book">Book</Link>
          <Link className="hover:text-gray-900" to="/appointments">Appointments</Link>
        </nav>
      </div>
    </header>
  )
}
