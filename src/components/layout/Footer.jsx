import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t">
      <div className="container px-4 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} DocsBuddy. All rights reserved.
      </div>
    </footer>
  )
}
