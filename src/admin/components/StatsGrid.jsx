import React, { useState, useEffect } from 'react'
import StatCard from './StatCard'
import { fetchAppointments } from '../../services/appointmentService'
import { motion } from 'framer-motion'

export default function StatsGrid(){
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  async function loadData(){
    const data = await fetchAppointments()
    setAppointments(data)
  }

  const totalAppointments = appointments.length
  const pendingAppointments = appointments.filter(a => a.status === 'pending').length
  const confirmedAppointments = appointments.filter(a => a.status === 'confirmed').length
  const totalDoctors = 22 // Static for now

  const stats = [
    { title: 'Total Appointments', value: totalAppointments, icon: '📅', bg: 'from-indigo-50 to-indigo-100' },
    { title: 'Pending Appointments', value: pendingAppointments, icon: '⏳', bg: 'from-yellow-50 to-yellow-100' },
    { title: 'Confirmed Appointments', value: confirmedAppointments, icon: '✅', bg: 'from-green-50 to-green-100' },
    { title: 'Total Doctors', value: totalDoctors, icon: '👩‍⚕️', bg: 'from-pink-50 to-pink-100' },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {stats.map((s, i) => (
        <motion.div key={s.title} initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.08 }}>
          <StatCard {...s} />
        </motion.div>
      ))}
    </motion.div>
  )
}
