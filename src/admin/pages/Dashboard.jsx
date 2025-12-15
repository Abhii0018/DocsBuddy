import React from 'react'
import StatsGrid from '../components/StatsGrid'
import AppointmentTable from '../components/AppointmentTable'

export default function Dashboard(){
  return (
    <div className="space-y-6">
      <StatsGrid />
      <AppointmentTable />
    </div>
  )
}
