import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Home from './home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
    <App/>
  </BrowserRouter>
)
