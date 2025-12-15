import React from 'react'
import DoctorCard from './DoctorCard'

const doctors = [
  { id: 1, name: 'Dr. Kavita Nair', specialty: 'General Physician', slots: '10AM-1PM' },
  { id: 2, name: 'Dr. Arjun Mehta', specialty: 'Orthopedic', slots: '1PM-4PM' },
  { id: 3, name: 'Dr. Riya Menon', specialty: 'Pediatrics', slots: '4PM-7PM' },
]

export default function DoctorList({ onAssign }){
  return (
    <div className="space-y-3">
      {doctors.map(doc => (
        <DoctorCard
          key={doc.id}
          name={doc.name}
          specialty={doc.specialty}
          slots={doc.slots}
          onAssign={() => onAssign?.(doc)}
        />
      ))}
    </div>
  )
}
