import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import States from './Context/States.jsx'
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <States>
    <App />
<Analytics></Analytics>
    </States>
  </StrictMode>,
)
