import React from 'react'

export default function GenderField(){
  return (
    <div>
      <label>Gender</label>
      <select className="border rounded p-2 w-full">
        <option>Female</option>
        <option>Male</option>
        <option>Other</option>
      </select>
    </div>
  )
}
