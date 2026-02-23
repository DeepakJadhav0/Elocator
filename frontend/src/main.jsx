
import { createRoot } from 'react-dom/client'
import "./components/navbar/navbar.css"
import { store } from './redux/store/store.js'
import {Provider} from "react-redux"
import EducationPage from "./components/education/EducationPage.jsx"
import About from './components/about/About.jsx'
import RecyclePage from './components/recycle/RecyclePage.jsx'
import FacilityPage from "./components/facility/FacilityPage.jsx"
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Applayout from './components/Applayout.jsx'
import HeroMain from './components/Hero/HeroMain.jsx'
import RulesPage from "./components/rules/RulesPage.jsx"
import LoginPage from './components/Login/LoginPage.jsx'
import SignUp from './components/signup/SignUp.jsx'
import AuthChecker from './components/auth/AuthChecker.jsx'
import Contact from './components/contact/Contact.jsx'
import Profile from './components/profile/Profile.jsx'
import RecycleRegister from './components/recycle/recuclePage/RecycleRegister.jsx'
import Successfully from './components/success/Successfully.jsx'

const route = createBrowserRouter([
  {
    path : "/",
    element : <Applayout/>,
    children : [
      {
        index : true, // ---- "/"
        element : <HeroMain/>
      },
      {
        path : "about",
        element : <About/>
      },
      {
        path : "facility",
        element :  <FacilityPage/>
      },
      {
        path : "recycle",
        element :  <RecyclePage/>
      },
      {
        path : "successfully",
        element : <Successfully/>
      },
      {
        path : "recycle/register",
        element : <RecycleRegister/> 
      },
      {
        path : "education",
        element : <EducationPage/>
      },
      {
        path : "contact",
        element : <Contact/>
      },
      {
        path : "rule",
        element : <RulesPage/>
      },
      {
        path : "login",
        element : <LoginPage/>
      },
      {
        path : "signup",
        element : <SignUp/>
      },
      {
        path : "profile",
        element : <Profile/>
      }
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={route}/>
  </Provider>
)
