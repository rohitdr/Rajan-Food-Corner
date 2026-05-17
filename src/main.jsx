import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import States from './Context/States.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <States>
    <App />
    </States>
  </StrictMode>,
)
