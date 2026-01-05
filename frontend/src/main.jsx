
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./components/navbar/navbar.css"
import MapDemo from './components/facility/MapDemo.jsx'
import { store } from './redux/store/store.js'
import {Provider} from "react-redux"
import SimpleMap from './components/facility/SimpleMap.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <SimpleMap/>
  </Provider>
)
