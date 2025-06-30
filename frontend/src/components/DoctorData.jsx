import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';


function DoctorData() {
    const [openIndex, setOpenIndex] = useState(null)

    const data = [
        {
            hospital: 'XYZ Hospital',
            city: 'Pune',
            doctor: {
                name: 'Dr. Suresh Raskar',
                designation: 'Neuro Surgeon',
                contact: '7410258968',
                timing: '9am - 5pm'
            },
            summary: 'Dr. Raskar is a highly experienced neuro surgeon with over 15 years.',
            education : [
                'MBBS (AIIMS Delhi)',
                'MS (Neurosurgery - PGI Chandigarh)'
            ],
            asso_hospitals : [
                'City General Hospital: 123 Main St, Anytown, USA',
                'Global Care Institute: 45 Park Ave, Centerville, USA'
            ],
            experience: '15+ Years in Neurosurgery, Former Head of Neurosurgery at Grand Hospital'
        },
        {
            hospital: 'XYZ Hospital',
            city: 'Pune',
            doctor: {
                name: 'Dr. Suresh Raskar',
                designation: 'Neuro Surgeon',
                contact: '7410258968',
                timing: '9am - 5pm'
            },
            summary: 'Dr. Raskar is a highly experienced neuro surgeon with over 15 years.',
            education : [
                'MBBS (AIIMS Delhi)',
                'MS (Neurosurgery - PGI Chandigarh)'
            ],
            asso_hospitals : [
                'City General Hospital: 123 Main St, Anytown, USA',
                'Global Care Institute: 45 Park Ave, Centerville, USA'
            ],
            experience: '15+ Years in Neurosurgery, Former Head of Neurosurgery at Grand Hospital'
        },
        {
            hospital: 'XYZ Hospital',
            city: 'Pune',
            doctor: {
                name: 'Dr. Suresh Raskar',
                designation: 'Neuro Surgeon',
                contact: '7410258968',
                timing: '9am - 5pm'
            },
            summary: 'Dr. Raskar is a highly experienced neuro surgeon with over 15 years.',
            education : [
                'MBBS (AIIMS Delhi)',
                'MS (Neurosurgery - PGI Chandigarh)'
            ],
            asso_hospitals : [
                'City General Hospital: 123 Main St, Anytown, USA',
                'Global Care Institute: 45 Park Ave, Centerville, USA'
            ],
            experience: '15+ Years in Neurosurgery, Former Head of Neurosurgery at Grand Hospital'
        }
    ]

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
  return (
    <>
      <div className='w-[70%] mx-auto mt-10'>
        <div>
            <div className='w-[90px] h-[45px] text-2xl text-white pt-1 text-center rounded-xl bg-[#78B0B4] font-bold'>
                <Link to="/hospitals">
                    <button className='hover:text-black'>
                        Back
                    </button>
                </Link>
            </div>
            <div className='text-center mb-10'>
                <p className='font-bold text-3xl text-[#217E7E]'>Doctor Details</p>
            </div>
        </div>

        {data.length == 0 ? (
            <p className='text-center text-gray-600'>No doctor data available.</p>
        ) : (
            <div className='bg-white mb-10 shadow rounded-lg overflow-hidden transition-all duration-500'>
                {data.map((item, index) => (
                    <div key={index} className='border-b'>
                        {/* Row content of doctor details */}
                        <div className='flex justify-between items-center p-4 bg-[#217E7E] text-white'>
                            <p className='font-semibold'>{item.doctor.name}</p>
                            <p className='font-semibold'>{item.doctor.designation}</p>
                            <p className='font-semibold'>{item.hospital}</p>
                            <p className='font-semibold'>{item.city}</p>
                            <button onClick={() => toggleDropdown(index)}>
                                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                            </button>
                        </div>

                        {/* Dropdown content of doctor details */}
                        <div className={`bg-[#ECE8E8] transition-all ease-in-out duration-500 overflow-hidden ${openIndex === index ? 'max-h-[1000px] p-4' : 'max-h-0'}`}>
                            <div className='text-black'>
                                <p className='font-bold text-[16px] mb-1'>Summary:</p>
                                <p className=''>{item.summary}</p>
                            </div>
                            <div className='text-black'>
                                <p className='font-bold text-[16px] mb-1'>Education:</p>
                                <ul className='list-disc text-black  pl-5'>
                                    {item.education?.map((p, i) =><li key={i}>{p}</li>)}
                                </ul>
                            </div>
                            <div className='text-black'>
                                <p className='font-bold text-[16px] mb-1'>Associate Hospitals:</p>
                                <ul className='list-disc text-black  pl-5'>
                                    {item.asso_hospitals?.map((p, i) =><li key={i}>{p}</li>)}
                                </ul>
                            </div>
                            <div className='text-black'>
                                <p className='font-bold text-[16px] mb-1'>Experience:</p>
                                <p>{item.experience}</p>
                            </div>
                            <div className='text-black'>
                                <p className='font-bold text-[16px] mb-1'>Contact Details:</p>
                                <div>
                                    <p>Name: {item.doctor.name}</p>
                                    <p>Designation: {item.doctor.designation}</p>
                                    <p>Time: {item.doctor.timing}</p>
                                    <p>Contact: {item.doctor.contact}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
        }
      </div>
      <div className='flex justify-center items-center text-center'>
        <div className='bg-[#78B0B4] w-[170px] h-[50px] rounded-3xl text-[20px] text-center font-bold text-white pt-2'>
            <Link to="/hospitals">
                <button className='hover:text-black'>
                    View Hospitals
                </button>
            </Link>
        </div>
      </div>
    </>
  )
}

export default DoctorData
