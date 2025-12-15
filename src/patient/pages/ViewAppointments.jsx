import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AppointmentCard from '../components/appointmentCard/AppointmentCard'
import { fetchAppointments, deleteAppointment } from '../../services/appointmentService'

export default function ViewAppointments(){
  const [items, setItems] = useState([])

  useEffect(()=>{ loadAppointments() },[])

  const loadAppointments = async () => {
    const data = await fetchAppointments()
    setItems(data)
  }

  const handleDelete = async (id) => {
    await deleteAppointment(id)
    loadAppointments()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Appointments</h2>
      {items.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-500 text-center py-8 bg-gray-50 rounded-lg"
        >
          No appointments found.
        </motion.div>
      )}
      <div className="space-y-4">
        {items.map((a)=> (
          <AppointmentCard
            key={a.id}
            id={a.id}
            patientName={a.fullName || a.name || 'Patient'}
            subject={a.subject || 'General Consultation'}
            date={a.date || 'TBD'}
            timeWindow={a.timeWindow || ''}
            status={a.status || 'pending'}
            bookedOn={a.bookedOn || ''}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </motion.div>
  )
}
