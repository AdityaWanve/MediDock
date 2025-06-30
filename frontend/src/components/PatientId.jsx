import React from 'react'

function PatientId() {
  return (
    <>
      <div className='flex flex-col justify-center items-center mt-[25px] mb-[25px]'>
        <div className='w-[30%] h-[330px] text-center rounded-xl shadow bg-[#78B0B4] opacity-100%'>
            <div className='text-left m-8'>
                <p className='font-semibold text-[18px] mb-2'>Enter Patient Unique ID:</p>
                <input className='w-full h-[40px] bg-gray-100 rounded-lg p-4' type='text' placeholder='Eg. P1001' />
            </div>
            <div className='text-left m-8'>
                <p className='font-semibold text-[18px] mb-2'>Enter One-Time Code:</p>
                <input className=' w-full h-[40px] bg-gray-100 placeholder-black-600 rounded-lg p-4' type='text' placeholder='Please enter a code...' />
            </div>
            <button className='w-[180px] h-[50px] text-[18px] bg-[#217E7E] opacity-100% text-black font-semibold rounded-2xl hover:text-white'>
                View Patient Data
            </button>
        </div>
      </div>
    </>
  )
}

export default PatientId
