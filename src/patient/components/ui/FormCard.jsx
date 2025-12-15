import React from 'react'

export default function FormCard({ title, children }){
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      {title && <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>}
      {children}
    </div>
  )
}
