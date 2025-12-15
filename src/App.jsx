import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PatientLogin from './patient/pages/PatientLogin'
import PatientDashboard from './patient/pages/PatientDashboard'
import BookAppointment from './patient/pages/BookAppointment'
import ViewAppointments from './patient/pages/ViewAppointments'
import AdminDashboard from './admin/pages/AdminDashboard'
import AdminAppointments from './admin/pages/AdminAppointments'
import AdminDoctors from './admin/pages/AdminDoctors'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <div className="bg-blob" aria-hidden="true" />
        <Navbar />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-10">
            <Routes>
              <Route path="/" element={<div className="prose"><h1>DocsBuddy</h1><p>Landing page</p></div>} />
              <Route path="/login" element={<PatientLogin />} />
              <Route path="/dashboard" element={<PatientDashboard />} />
              <Route path="/book" element={<BookAppointment />} />
              <Route path="/appointments" element={<ViewAppointments />} />

              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/appointments" element={<AdminAppointments />} />
              <Route path="/admin/doctors" element={<AdminDoctors />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
