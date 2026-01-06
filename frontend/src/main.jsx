
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./components/navbar/navbar.css"
import { store } from './redux/store/store.js'
import {Provider} from "react-redux"
import Navbar from "./components/navbar/Navbar.jsx"
import Footer from "./components/footer/Footer.jsx"
import About from './components/about/About.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Navbar/>
    <About/>
    <Footer/>
  </Provider>
)
