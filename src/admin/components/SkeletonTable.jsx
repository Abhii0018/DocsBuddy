import React from 'react'

export default function SkeletonTable(){
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm animate-pulse">
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="h-5 bg-gray-200 rounded w-40"></div>
      </div>
      <div className="p-4 space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex gap-4">
            <div className="h-4 bg-gray-200 rounded flex-1"></div>
            <div className="h-4 bg-gray-200 rounded flex-1"></div>
            <div className="h-4 bg-gray-200 rounded flex-1"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
