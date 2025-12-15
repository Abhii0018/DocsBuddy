import React from 'react'

export default function GenderField({ value, onChange }){
  return (
    <div>
      <label>Gender</label>
      <select className="border rounded p-2 w-full" value={value} onChange={e=>onChange?.(e.target.value)}>
        <option value="">Select</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Other">Other</option>
      </select>
    </div>
  )
}
