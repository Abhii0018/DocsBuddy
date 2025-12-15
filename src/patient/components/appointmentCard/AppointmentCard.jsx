import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { normalizeSubject } from '../../../services/textUtils'

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  confirmed: 'bg-green-100 text-green-800 border-green-200',
  completed: 'bg-blue-100 text-blue-800 border-blue-200',
}

const timeWindowLabels = {
  '10AM-1PM': 'Morning (10 AM – 1 PM)',
  '1PM-4PM': 'Afternoon (1 PM – 4 PM)',
  '4PM-7PM': 'Evening (4 PM – 7 PM)'
}

export default function AppointmentCard({ id, patientName = '', subject = 'General Consultation', date = 'TBD', timeWindow = '', status = 'pending', bookedOn = '', onDelete }) {
  const statusClass = statusColors[status.toLowerCase()] || statusColors.pending
  const timeDisplay = timeWindowLabels[timeWindow] || timeWindow || 'Not specified'
  const isPending = status.toLowerCase() === 'pending'
  const [showConfirm, setShowConfirm] = useState(false)

  const handleDelete = () => { setShowConfirm(true) }
  const confirmDelete = () => { setShowConfirm(false); onDelete?.(id) }
  const cancelDelete = () => { setShowConfirm(false) }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.02, boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}
        className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            {patientName && (
              <div className="text-sm text-gray-500 mb-1">Patient: <span className="font-semibold text-gray-800">{patientName}</span></div>
            )}
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Subject: <span className="font-serif tracking-tight">{normalizeSubject(subject)}</span>
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <div className={`px-3 py-1 rounded-full text-sm font-semibold border ${statusClass} capitalize`}>
              {status}
            </div>
            {isPending && (
              <button
                onClick={handleDelete}
                className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition"
              >
                Delete
              </button>
            )}
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex items-center text-sm text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span><strong>Appointment Date:</strong> {date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Preferred Time:</strong> {timeDisplay}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Booked On:</strong> {bookedOn || 'Not available'}</span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={cancelDelete}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-xl"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Cancel Appointment</h3>
              <p className="text-gray-600 mb-6">Are you sure you want to cancel this appointment?</p>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={cancelDelete}
                  className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
