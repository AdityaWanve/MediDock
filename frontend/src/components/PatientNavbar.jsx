import React from 'react'
import logo from '../assets/logo.jpg'
import icon from '../assets/profileicon.png'
import { Link } from 'react-router-dom';

function PatientNavbar() {
  return (
    <>
      <div className='w-full h-[70px] bg-[#217E7E] flex justify-between'>
        <div className='w-[20%] h-[70px] ml-[15px]'>
            <img className='w-[120px] p-[4px] h-auto' src={logo} alt='Logo' />
        </div>
        <div className='w-[500px] justify-center pl-[5px]'>
            <ul className='list-none mt-[20px] flex justify-between text-white  font-medium'>
              <Link to="/"><li className='text-[20px] font-normal  hover:text-[#000000] cursor-pointer'>Home</li></Link>
              <Link to="/hospitals"><li className='text-[20px] font-normal  hover:text-[#000000] cursor-pointer'>MedicalData</li></Link>
              <Link to="/doctordata"><li className='text-[20px] font-normal  hover:text-[#000000] cursor-pointer'>Doctors</li></Link>
              <Link to="/contact"><li className='text-[20px] font-normal  hover:text-[#000000] cursor-pointer'>Contacts</li></Link>
            </ul>
        </div>
        <div className='flex justify-end mr-[15px] mt-[9px]'>
          <img className='w-[50px] h-[50px]' src={icon} alt='profile-icon' />
        </div>
      </div>
    </>
  )
}

export default PatientNavbar
