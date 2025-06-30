import React from 'react'
import { Link } from 'react-router-dom'

function HealthCard() {
  return (
    <>
    <div className='flex justify-center items-center h-[600px]'>
      <div className='flex flex-col justify-center items-center bg-[#d9d9d9] rounded-xl w-[25%] h-[530px] '>
            <div className='mt-[20px] mb-[20px]'>
                <p className='text-3xl text-[#306B7C] font-bold'>HEALTH CARD</p>
            </div>
            <div className='w-[80%] h-[50px] rounded-lg bg-[#78B0B4] pt-[10px] mt-[20px] pl-[25px] opacity-50%'>
                <p className='text-[#306B7C] text-[18px] font-bold'><span className='pr-[20px] font-bold text-[#0E4D5E]'>Name : </span> Soham Sonawane</p>
            </div>
            <div className='w-[80%] h-[50px] rounded-lg bg-[#78B0B4] pt-[10px] mt-[20px] pl-[25px] opacity-50%'>
                <p className='text-[#306B7C] text-[18px] font-bold'><span className='pr-[20px] font-bold text-[#0E4D5E]'>Patient ID : </span> 250220</p>
            </div>
            <div className='w-[80%] h-[50px] rounded-lg bg-[#78B0B4] pt-[10px] mt-[20px] pl-[25px] opacity-50%'>
                <p className='text-[#306B7C] text-[18px] font-bold'><span className='pr-[20px] font-bold text-[#0E4D5E]'>Age : </span> 38</p>
            </div>
            <div className='w-[80%] h-[50px] rounded-lg bg-[#78B0B4] pt-[10px] mt-[20px] pl-[25px] opacity-50%'>
                <p className='text-[#306B7C] text-[18px] font-bold'><span className='pr-[20px] font-bold text-[#0E4D5E]'>Blood Group : </span> A+</p>
            </div>
            <div className='w-[80%] h-[50px] rounded-lg bg-[#78B0B4] pt-[10px] mt-[20px] pl-[25px] opacity-50%'>
                <p className='text-[#306B7C] text-[18px] font-bold'><span className='pr-[20px] font-bold text-[#0E4D5E]'>Contact : </span> 745213...</p>
            </div>
            <div className='w-[60%] h-[45px] text-center bg-[#357080] rounded-3xl mt-[20px] pt-[9px] hover:bg-[#2a5e6a] cursor-pointer'>
                <Link to="hospitals">
                    <button className='text-1xl font-bold text-white'>
                        View Full Medical History
                    </button>
                </Link>
            </div>
      </div>
      </div>
    </>
  )
}

export default HealthCard
