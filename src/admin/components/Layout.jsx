import React from 'react'
import Sidebar from './Sidebar'

export default function Layout({ children }){
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 p-10 space-y-6 bg-gray-50 flex justify-center">
        <div className="w-full max-w-[1600px]">
          {children || <div className="text-gray-500">Select a view</div>}
        </div>
      </main>
    </div>
  )
}
