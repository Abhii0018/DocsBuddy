import React, { useState, useEffect } from 'react'

export default function StatCard({ title, value, icon = null, bg = 'from-blue-50 to-blue-100' }){
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = parseInt(value)
    if (start === end) return

    const duration = 1200
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className={`bg-gradient-to-r ${bg} rounded-xl p-5 shadow-sm flex items-center justify-between hover:shadow-lg transition-all duration-300 group`}>
      <div>
        <div className="text-sm text-gray-600 font-medium">{title}</div>
        <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">{count}</div>
      </div>
      {icon && (
        <div className="w-14 h-14 rounded-full bg-white/80 text-xl flex items-center justify-center font-medium transform group-hover:scale-105 transition-transform duration-300">
          {icon}
        </div>
      )}
    </div>
  )
}
