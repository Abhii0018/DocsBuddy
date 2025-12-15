import React from 'react'

export default function SubjectField({ value, onChange }){
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Subject</label>
      <input
        placeholder="Fever for 3 days"
        value={value}
        onChange={e=>onChange?.(e.target.value)}
        className="w-full rounded-lg border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow duration-150"
      />
    </div>
  )
}
