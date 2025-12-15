import React from 'react'

export default function Sidebar(){
  return (
    <aside className="w-64 bg-white border-r p-4 hidden md:block">
      <ul className="space-y-2 text-sm text-gray-700">
        <li>Dashboard</li>
        <li>Appointments</li>
        <li>Profile</li>
      </ul>
    </aside>
  )
}
