const STORAGE_KEY = 'docsbuddy_appointments'

export async function fetchAppointments(){
  // Get appointments from localStorage
  const stored = localStorage.getItem(STORAGE_KEY)
  const appointments = stored ? JSON.parse(stored) : []
  return Promise.resolve(appointments)
}

export async function createAppointment(data){
  // Save appointment to localStorage
  const stored = localStorage.getItem(STORAGE_KEY)
  const appointments = stored ? JSON.parse(stored) : []
  
  // Format the date if it's a Date object
  const now = new Date()
  const bookedOn = now.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
  
  const appointment = {
    ...data,
    date: data.date instanceof Date ? data.date.toLocaleDateString('en-GB') : data.date,
    status: 'pending',
    id: Date.now(),
    bookedOn
  }
  
  appointments.push(appointment)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments))
  
  return Promise.resolve({ok: true, data: appointment})
}

export async function deleteAppointment(id){
  // Remove appointment from localStorage
  const stored = localStorage.getItem(STORAGE_KEY)
  const appointments = stored ? JSON.parse(stored) : []
  
  const filtered = appointments.filter(a => a.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
  
  return Promise.resolve({ok: true})
}
