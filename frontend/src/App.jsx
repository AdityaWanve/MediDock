import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PatientHomePage from './pages/PatientHomePage'
import PatientHealthCard from './pages/PatientHealthCard'
import HospitalTable from './pages/HospitalTable'
import MedicalDataRecords from './pages/MedicalDataRecords'
import DoctorDetails from './pages/DoctorDetails'
import DoctorHomePage from './pages/DoctorHomePage'
import PatientContact from './pages/PatientContact'
import PatientForm from './pages/PatientForm'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientHomePage />}/>
        <Route path="/healthcard" element={<PatientHealthCard />} />
        <Route path="/hospitals" element={<HospitalTable />}/>
        <Route path="/medicaldata" element={<MedicalDataRecords />}/>
        <Route path="/doctordata" element={<DoctorDetails/>} />
        <Route path="/dochome" element={<DoctorHomePage />} />
        <Route path="/contact" element={<PatientContact />} />
        <Route path="/patientform" element={<PatientForm />} />
      </Routes>
    </Router>
  )
}

export default App
