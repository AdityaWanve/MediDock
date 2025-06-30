import React from 'react'
import { Link } from 'react-router-dom'

function HospitalsData() {
    const hospitals = [
        { name: 'ABC Hospital', diseases: 'Flu, Diabetes', id: 'abc', city: 'Pune' },
        { name: 'XYZ Hospital', diseases: 'Cancer, BP', id: 'xyz', city: 'Pune' },
        { name: 'MNO Hospital', diseases: 'Hand Injury', id: 'mno', city: 'Pune' },
        { name: 'PQR Hospital', diseases: 'Pneumonia, Head Injury', id: 'pqr', city: 'Pune' },
    ]
  return (
    <>
      <div className='w-[60%] mx-auto mt-20 mb-10 rounded-xl overflow-hidden shadow-lg'>
        <table className='w-full text-center border-collapse rounded-xl'>
            <thead>
                <tr className='bg-teal-700 text-white'>
                    <th className='py-3 px-6 text-lg'>Hospitals Name</th>
                    <th className='py-3 px-6 text-lg'>Diseases Name</th>
                    <th className='py-3 px-6 text-lg'>City</th>
                </tr>
            </thead>
            <tbody className='text-black text-md'>
                {hospitals.map((hospital, index)=>(
                    <tr key={index} className='border-t border-gray-400'>
                        <td
                        className='py-4 px-6 font-bold text-teal-800 cursor-pointer hover:underline'
                        >
                            {hospital.name}
                        </td>
                        <td className='py-4 px-6'>{hospital.diseases}</td>
                        <td className='py-4 px-6'>{hospital.city}</td>
                    </tr>
                ))

                }
            </tbody>
        </table>
      </div>
      <div className='flex justify-center items-center text-center'>
        <div className='bg-[#78B0B4] w-[170px] h-[50px] rounded-3xl text-[20px] text-center font-bold text-white pt-2'>
            <Link to="/doctordata">
                <button className='hover:text-black'>
                    View Doctors
                </button>
            </Link>
        </div>
      </div>
    </>
  )
}

export default HospitalsData
