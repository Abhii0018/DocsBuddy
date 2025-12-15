import React from 'react'

export default function SubmitButton({onClick, children='Submit', type='button', disabled}){
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="mt-3 inline-flex items-center gap-2 px-5 py-2 rounded-full text-white font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-[1.02] transform transition-shadow shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:opacity-60"
    >
      {children}
    </button>
  )
}
