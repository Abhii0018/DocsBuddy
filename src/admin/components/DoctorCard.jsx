import React from 'react'

export default function DoctorCard({ name, specialty, slots, onAssign }){
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex items-center justify-between">
      <div>
        <div className="text-lg font-semibold text-gray-800">{name}</div>
        <div className="text-sm text-gray-500">{specialty}</div>
        <div className="text-xs text-gray-400 mt-1">Available slots: {slots}</div>
      </div>
      <button
        onClick={onAssign}
        className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
      >
        Assign
      </button>
    </div>
  )
}
