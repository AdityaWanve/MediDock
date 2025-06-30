import React from 'react'
import PatientNavbar from '../components/PatientNavbar'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import Features from '../components/Features'
import Testimonal from '../components/Testimonal'
import Footer from '../components/Footer'

function PatientHomePage() {
  return (
    <>
      <PatientNavbar />
      <HeroSection />
      <AboutUs />
      <Features />
      <Testimonal />
      <Footer />
    </>
  )
}

export default PatientHomePage
