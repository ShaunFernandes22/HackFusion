import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from './About'

const Landing = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        {/* <Ab out/> */}
        <Footer/>
    </>
  )
}

export default Landing