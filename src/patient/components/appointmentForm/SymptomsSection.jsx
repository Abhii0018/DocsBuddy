import React from 'react'

export default function SymptomsSection({ value, onChange }){
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Symptoms</label>
      <textarea
        placeholder="Explain your symptoms in detail..."
        value={value}
        onChange={e=>onChange?.(e.target.value)}
        rows={4}
        className="w-full rounded-lg border border-gray-200 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-150"
      />
    </div>
  )
}
