import React from 'react'
import AppointmentTable from '../components/AppointmentTable'

export default function Appointments(){
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Appointments</h2>
        <span className="text-sm text-gray-500">Basic info only</span>
      </div>
      <AppointmentTable />
    </div>
  )
}
