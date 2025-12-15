import React from 'react'
import PatientDashboardHeader from '../components/ui/PatientDashboardHeader'
import PatientInfoCard from '../components/ui/PatientInfoCard'
import ProfileDetails from '../components/ui/ProfileDetails'

export default function PatientDashboard(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2 space-y-4">
        <PatientDashboardHeader />
        <div className="bg-white p-4 rounded">Main dashboard content</div>
      </div>
      <aside className="space-y-3">
        <PatientInfoCard />
        <ProfileDetails />
      </aside>
    </div>
  )
}
