import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'

const el = document.getElementById('app')
if (!el) throw new Error('No #app element found')

createRoot(el).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
