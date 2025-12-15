import React, { useState } from 'react'
import DoctorList from '../components/DoctorList'

export default function Doctors(){
  const [assigned, setAssigned] = useState(null)

  function handleAssign(doc){
    setAssigned(doc)
    alert(`Assigned ${doc.name}`)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Doctors</h2>
        {assigned && (
          <div className="text-sm text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-lg">
            Assigned: {assigned.name}
          </div>
        )}
      </div>
      <DoctorList onAssign={handleAssign} />
    </div>
  )
}
