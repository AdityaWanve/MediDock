import React from 'react'
import PatientNavbar from '../components/PatientNavbar';
import HealthCard from '../components/HealthCard';
import Footer from '../components/Footer';
const PatientHealthCard = () => {
    return (
        <>
            <PatientNavbar />
            <HealthCard />
            <Footer />
        </>
    )
}

export default PatientHealthCard;