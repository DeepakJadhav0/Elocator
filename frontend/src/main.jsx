import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import "./components/navbar/navbar.css"
import HeroPage1 from './components/Hero/HeroPage1.jsx'
import HeroPage2 from './components/Hero/HeroPage2.jsx'
import HeroFaq from './components/Hero/HeroFaq.jsx'
import HeroCards from './components/Hero/HeroCards.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroCards/>
  </StrictMode>,
)
