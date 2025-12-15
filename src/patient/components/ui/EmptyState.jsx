import React from 'react'

export default function EmptyState({ title = 'No data', message = 'Nothing to show yet.' }){
  return (
    <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-200">
      <div className="text-lg font-semibold text-gray-700">{title}</div>
      <div className="text-sm text-gray-500 mt-1">{message}</div>
    </div>
  )
}
