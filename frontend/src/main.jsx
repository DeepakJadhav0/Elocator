import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import "./components/navbar/navbar.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Footer/>
  </StrictMode>,
)
