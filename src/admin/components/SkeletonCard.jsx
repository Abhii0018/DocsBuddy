import React from 'react'

export default function SkeletonCard(){
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm animate-pulse">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-32 mb-3"></div>
          <div className="h-8 bg-gray-300 rounded w-20"></div>
        </div>
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  )
}
