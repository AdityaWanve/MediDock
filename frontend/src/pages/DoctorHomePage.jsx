import React from 'react'
import DocNavbar from '../components/DocNavbar'
import HeroSection from '../components/HeroSection'
import PatientId from '../components/PatientId'
import Footer from '../components/Footer'

const DoctorHomePage = () => {
    return (
        <>
            <DocNavbar />
            <HeroSection />
            <PatientId />
            <Footer />
        </>
    )
}

export default DoctorHomePage;
