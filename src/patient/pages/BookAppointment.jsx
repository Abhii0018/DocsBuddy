import React, { useState } from 'react'
import PersonalInfoSection from '../components/appointmentForm/PersonalInfoSection'
import GenderField from '../components/appointmentForm/GenderField'
import SubjectField from '../components/appointmentForm/SubjectField'
import SymptomsSection from '../components/appointmentForm/SymptomsSection'
import PastHistoryField from '../components/appointmentForm/PastHistoryField'
import UploadReports from '../components/appointmentForm/UploadReports'
import DatePicker from '../components/appointmentForm/DatePicker'
import TimeWindowSelector from '../components/appointmentForm/TimePicker'
import SubmitButton from '../components/appointmentForm/SubmitButton'
import { createAppointment } from '../../services/appointmentService'
import { useNavigate } from 'react-router-dom'
import { uploadFiles } from '../../services/fileUploadService'
import { required, emailFormat, phoneFormat, pincodeFormat, numericPositive } from '../../utils/validations'
import { motion } from 'framer-motion'

export default function BookAppointment(){
  const [form, setForm] = useState({
    fullName:'', age:'', weight:'', height:'', phone:'', email:'', gender:'', subject:'', description:'', pastHistory:'', date:'', timeWindow:'', address:'', city:'', state:'', pincode:''
  })
  const [files, setFiles] = useState([])
  const [previews, setPreviews] = useState([])
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function update(field, value){ setForm(f=>({ ...f, [field]: value })) }

  const requiredFields = ['fullName','email','gender','weight','height','subject','description','pincode','state','address','phone','date','timeWindow']
  const isFormValid = () => {
    for (const k of requiredFields) {
      if (!form[k] || String(form[k]).trim().length === 0) return false
    }
    // format checks
    if (phoneFormat(form.phone)) return false
    if (emailFormat(form.email)) return false
    if (pincodeFormat(form.pincode)) return false
    if (numericPositive(form.weight)) return false
    if (numericPositive(form.height)) return false
    return true
  }

  function onFiles(newFiles){
    const selected = Array.from(newFiles || [])
    setFiles(f=>[...f, ...selected])
    const newPreviews = selected.map(f=>URL.createObjectURL(f))
    setPreviews(p=>[...p, ...newPreviews])
  }

  function removeFile(index){
    setFiles(f=>f.filter((_,i)=>i!==index))
    setPreviews(p=>p.filter((_,i)=>i!==index))
  }

  async function handleSubmit(e){
    e.preventDefault()
    const newErrors = {}
    if (required(form.fullName)) newErrors.fullName = 'Full name is required'
    if (required(form.age)) newErrors.age = 'Age is required'
    if (required(form.gender)) newErrors.gender = 'Gender is required'
    if (required(form.subject)) newErrors.subject = 'Subject is required'
    if (required(form.description)) newErrors.description = 'Symptoms are required'
    if (required(form.date)) newErrors.date = 'Appointment date is required'
    if (required(form.timeWindow)) newErrors.timeWindow = 'Preferred time is required'
    if (required(form.address)) newErrors.address = 'Address is required'
    if (required(form.city)) newErrors.city = 'City is required'
    if (required(form.state)) newErrors.state = 'State is required'
    if (required(form.pincode)) newErrors.pincode = 'Pincode is required'
    if (required(form.weight)) newErrors.weight = 'Weight is required'
    if (required(form.height)) newErrors.height = 'Height is required'
    const emailErr = emailFormat(form.email); if (emailErr) newErrors.email = emailErr
    const phoneErr = phoneFormat(form.phone); if (phoneErr) newErrors.phone = phoneErr
    const pinErr = pincodeFormat(form.pincode); if (pinErr) newErrors.pincode = pinErr
    const weightErr = numericPositive(form.weight); if (weightErr) newErrors.weight = 'Enter weight in kg'
    const heightErr = numericPositive(form.height); if (heightErr) newErrors.height = 'Enter height in feet'
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setLoading(true)
    try{
      let uploaded = []
      if (files.length) uploaded = await uploadFiles(files)
      const payload = { ...form, files: uploaded }
      const res = await createAppointment(payload)
      if (res && res.ok){ navigate('/appointments') }
    }finally{ setLoading(false) }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl border-l-4 border-blue-400 space-y-6 transition-shadow hover:shadow-2xl">
      <h2 className="text-2xl font-bold mb-2">Book Appointment</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full name</label>
          <input className="w-full rounded-lg border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" value={form.fullName} onChange={e=>update('fullName', e.target.value)} />
          {errors.fullName && <div className="text-red-500 text-sm mt-1">{errors.fullName}</div>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Age</label>
          <input type="number" className="w-full rounded-lg border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" value={form.age} onChange={e=>update('age', e.target.value)} />
          {errors.age && <div className="text-red-500 text-sm mt-1">{errors.age}</div>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input className="w-full rounded-lg border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" value={form.phone} onChange={e=>update('phone', e.target.value)} />
          {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full rounded-lg border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" value={form.email} onChange={e=>update('email', e.target.value)} />
          {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Weight (kg)</label>
          <input type="number" step="0.1" className="w-full rounded-lg border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" value={form.weight} onChange={e=>update('weight', e.target.value)} />
          {errors.weight && <div className="text-red-500 text-sm mt-1">{errors.weight}</div>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Height (ft)</label>
          <input
            type="number"
            step="0.1"
            placeholder="e.g., 5.6"
            className="w-full rounded-lg border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            value={form.height}
            onChange={e=>{
              const v = e.target.value
              const digits = String(v).replace(/[^0-9]/g, '')
              if (digits.length >= 11) {
                alert('Please enter a valid height — too many digits')
                return
              }
              update('height', v)
            }}
          />
          {errors.height && <div className="text-red-500 text-sm mt-1">{errors.height}</div>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea className="w-full rounded-lg border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" rows={3} value={form.address} onChange={e=>update('address', e.target.value)} />
          {errors.address && <div className="text-red-500 text-sm mt-1">{errors.address}</div>}
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input className="w-full rounded-lg border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" value={form.city} onChange={e=>update('city', e.target.value)} />
            {errors.city && <div className="text-red-500 text-sm mt-1">{errors.city}</div>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">State</label>
            <select className="w-full rounded-lg border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition appearance-none" value={form.state} onChange={e=>update('state', e.target.value)}>
              <option value="">Select state</option>
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
              <option>Delhi</option>
              <option>Pondicherry</option>
            </select>
            {errors.state && <div className="text-red-500 text-sm mt-1">{errors.state}</div>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Pincode</label>
            <input className="w-full rounded-lg border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" value={form.pincode} onChange={e=>update('pincode', e.target.value)} />
            {errors.pincode && <div className="text-red-500 text-sm mt-1">{errors.pincode}</div>}
          </div>
        </div>
      </div>

      <div>
        <GenderField value={form.gender} onChange={v=>update('gender',v)} />
      </div>

      <div className="space-y-4">
        <SubjectField value={form.subject} onChange={v=>update('subject',v)} />
        <SymptomsSection value={form.description} onChange={v=>update('description',v)} />
        <PastHistoryField value={form.pastHistory} onChange={v=>update('pastHistory',v)} />
      </div>

      <div>
        <UploadReports onFiles={onFiles} />
        <div className="flex gap-3 mt-4 flex-wrap">
          {previews.map((src,i)=> (
            <motion.div key={i} initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} className="relative group">
              <img src={src} className="h-28 w-28 object-cover rounded-lg shadow-md transform group-hover:scale-105 transition" alt={`preview-${i}`} />
              <button type="button" onClick={()=>removeFile(i)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs">×</button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DatePicker value={form.date} onChange={v=>update('date', v)} />
        <TimeWindowSelector value={form.timeWindow} onChange={v=>update('timeWindow', v)} />
      </div>

      <div className="flex items-center justify-end">
        <SubmitButton type="submit" disabled={loading || !isFormValid()}>{loading ? 'Submitting...' : 'Book Appointment'}</SubmitButton>
      </div>
    </form>
  )
}
