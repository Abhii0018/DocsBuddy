import React from 'react'

export default function PatientInfoCard({name='Jane Doe', age=29}){
  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <h4 className="font-semibold">{name}</h4>
      <p className="text-sm text-gray-600">Age: {age}</p>
    </div>
  )
}
