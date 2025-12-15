import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', path: '/admin/dashboard' },
  { label: 'Appointments', path: '/admin/appointments' },
  { label: 'Doctors', path: '/admin/doctors' },
]

export default function Sidebar(){
  return (
    <aside className="w-60 bg-white border-r border-gray-200 min-h-screen py-6 px-4 flex flex-col gap-6">
      <div className="text-lg font-bold text-blue-600">Admin Panel</div>
      <nav className="flex-1 space-y-2">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-lg transition font-medium border ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border-blue-200 shadow-sm'
                  : 'text-gray-700 border-transparent hover:bg-gray-50 hover:border-gray-200'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="text-xs text-gray-400 leading-relaxed">
        Admin can only view appointment metadata. No patient medical files or reports are visible here.
      </div>
    </aside>
  )
}
