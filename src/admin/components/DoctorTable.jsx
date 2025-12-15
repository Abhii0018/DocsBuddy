import React from 'react'

const doctors = [
  { id: 1, name: 'Dr. Kavita Nair', specialization: 'General Physician', email: 'k.nair@hospital.com', status: 'Active' },
  { id: 2, name: 'Dr. Arjun Mehta', specialization: 'Orthopedic', email: 'a.mehta@hospital.com', status: 'On Leave' },
  { id: 3, name: 'Dr. Riya Menon', specialization: 'Pediatrics', email: 'r.menon@hospital.com', status: 'Active' },
  { id: 4, name: 'Dr. Vivek Rao', specialization: 'Cardiologist', email: 'v.rao@hospital.com', status: 'Active' },
]

export default function DoctorTable(){
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">Doctors</h3>
        <span className="text-sm text-gray-500">No medical records shown</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Doctor Name</th>
              <th className="px-4 py-3">Specialization</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc) => (
              <tr key={doc.id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">{doc.name}</td>
                <td className="px-4 py-3 text-gray-600">{doc.specialization}</td>
                <td className="px-4 py-3 text-gray-600">{doc.email}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${
                    doc.status === 'Active'
                      ? 'bg-green-50 text-green-700 border-green-200'
                      : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                  }`}>
                    {doc.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
