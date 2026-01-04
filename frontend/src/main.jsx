import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./components/navbar/navbar.css"
import HeroMain from './components/Hero/HeroMain.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroMain/>
  </StrictMode>,
)
