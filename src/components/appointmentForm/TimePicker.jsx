import React from 'react'

const timeWindows = [
  { value: '10AM-1PM', label: 'Morning (10 AM – 1 PM)' },
  { value: '1PM-4PM', label: 'Afternoon (1 PM – 4 PM)' },
  { value: '4PM-7PM', label: 'Evening (4 PM – 7 PM)' }
]

export default function TimeWindowSelector({ value, onChange }) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-1 text-gray-700">
        Preferred Time
      </label>
      <select
        value={value || ''}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 
                   focus:outline-none focus:ring-2 focus:ring-blue-400 transition
                   text-gray-700 bg-white"
      >
        <option value="" disabled>
          Select preferred time window
        </option>
        {timeWindows.map((window) => (
          <option key={window.value} value={window.value}>
            {window.label}
          </option>
        ))}
      </select>
    </div>
  )
}

