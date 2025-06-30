import React from 'react'
import logo from '../assets/logo.jpg'
import icon from '../assets/profileicon.png'

function DocNavbar() {
  return (
    <>
      <div className='w-full h-[70px] bg-[#217E7E] flex justify-between'>
        <div className='w-[20%] h-[70%] ml-[15px]'>
            <img className='w-[120px] h-auto p-[4px]' src={logo} alt='Logo' />
        </div>
        <div className='w-[250px] justify-center pl-[5px]'>
            <ul className='list-none flex justify-around text-black-700 mt-[20px] font-medium'>
                <li className='text-[20px] font-bold hover:text-[#ffffff] cursor-pointer'>Home</li>
                <li className='text-[20px] font-bold hover:text-[#ffffff] cursor-pointer'>Login</li>
            </ul>
        </div>
        <div className='flex justify-end mr-[15px] mt-[9px]'>
            <img className='w-[50px] h-[50px]' src={icon} alt='profile' />
        </div>
      </div>
    </>
  )
}

export default DocNavbar;
