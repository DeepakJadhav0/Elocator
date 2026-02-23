import React from 'react'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './footer/Footer'

export default function Applayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
