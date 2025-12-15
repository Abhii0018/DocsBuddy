import React from 'react'
import Layout from '../components/Layout'
import DoctorTable from '../components/DoctorTable'

export default function AdminDoctors(){
  return (
    <Layout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Doctors</h1>
            <p className="text-sm text-gray-500">Manage doctor roster without exposing patient data</p>
          </div>
          <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700">
            Add Doctor
          </button>
        </div>
        <DoctorTable />
      </div>
    </Layout>
  )
}
