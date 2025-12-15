import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import AppointmentTable from '../components/AppointmentTable'
import SkeletonTable from '../components/SkeletonTable'

export default function AdminAppointments(){
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-6 px-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
            <p className="text-sm text-gray-500">Assign doctors without viewing any patient reports</p>
          </div>
          <span className="text-xs text-gray-500">Only non-sensitive metadata is shown</span>
        </div>
        {loading ? <SkeletonTable /> : <AppointmentTable />}
      </div>
    </Layout>
  )
}
