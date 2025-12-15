import React, { useEffect, useState } from 'react'
import { fetchAppointments } from '../../services/appointmentService'

function assignDoctor(name) {
  alert(`Assign doctor for ${name}`)
}

export default function AppointmentTable() {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    loadAppointments()
  }, [])

  async function loadAppointments() {
    const data = await fetchAppointments()
    setAppointments(data)
  }

  return (
    <div className="w-full max-w-7xl bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">Appointments ({appointments.length})</h3>
        <span className="text-sm text-gray-500">Live data  no medical files, reports, or emails</span>
      </div>
      <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
        {appointments.length === 0 ? (
          <div className="px-6 py-12 text-center text-gray-500">
            <p className="text-lg font-medium">No appointments yet</p>
            <p className="text-sm mt-1">Appointments booked by patients will appear here</p>
          </div>
        ) : (
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-700 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Patient Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Gender</th>
                <th className="px-6 py-3 text-left text-sm font-semibold w-[320px]">Subject</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Time</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Doctor</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a) => (
                <tr key={a.id} className="border-t border-gray-100 hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-gray-800 font-medium">{a.fullName || a.name}</td>
                  <td className="px-6 py-4 text-gray-600">{a.gender}</td>
                  <td className="px-6 py-4 text-gray-600 whitespace-normal break-words w-[320px]">{a.subject}</td>
                  <td className="px-6 py-4 text-gray-600">{a.date}</td>
                  <td className="px-6 py-4 text-gray-600">{a.timeWindow || a.time}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold border ${ a.status === 'pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : a.status === 'confirmed' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-blue-50 text-blue-700 border-blue-200' }`}
                    >
                      {a.status.charAt(0).toUpperCase() + a.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{a.doctor || 'Unassigned'}</td>
                  <td className="px-6 py-4">
                    <button onClick={() => assignDoctor(a.fullName || a.name)} className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline">
                      Assign
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
