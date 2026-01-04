import React from 'react'
import Navbar from '../navbar/Navbar'
import HeroPage1 from './HeroPage1'
import HeroPage2 from './HeroPage2'
import HeroCards from './HeroCards'
import HeroFaq from './HeroFaq'
import Footer from '../footer/Footer'

export default function HeroMain() {
  return (
    <main>
        <Navbar/>
        <HeroPage1/>
        <HeroPage2/>
        <HeroCards/>
        <HeroFaq/>
        <Footer/>
    </main>
  )
}
