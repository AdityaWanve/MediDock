import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MedicalData = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      date: '2025-05-22',
      hospital: 'XYZ Hospital',
      doctor: {
        name: 'Dr. Suresh Raskar',
        designation: 'Neuro Surgeon',
        contact: '7410258968',
        timing: '9am - 5pm'
      },
      reason: 'Head Injury',
      prescriptions: [
        'Paracetamol 500mg - 1 tablet, 3 times a day for 5 days',
        'Multivitamin - 1 tablet daily for 30 days'
      ],
      test_results: [
        'Blood Pressure: 120/80 mmHg (Normal)',
        'Cholesterol: 180 mg/dL (Normal)',
        {
          title: 'View Full Lab Report (PDF)',
          type: 'pdf',
          url: 'https://example.com/labreport.pdf'
        }
      ],
      notes_from_doctor: 'Patient presented with mild fatigue. Advised to maintain a balanced diet and regular exercise. Follow-up in 6 months for routine check-up.',
      allergies: ['Dusting and Intense smell'],
      related_images: [
        {
          title: 'X-Ray Scan',
          url: '#'
        },
        {
          title: 'MR Scan',
          url: '#'
        }
      ],
      surgery_details: 'Minor brain swelling treated without surgery.'
    },
    {
      date: '2025-05-22',
      hospital: 'XYZ Hospital',
      doctor: {
        name: 'Dr. Suresh Raskar',
        designation: 'Neuro Surgeon',
        contact: '7410258968',
        timing: '9am - 5pm'
      },
      reason: 'Head Injury',
      prescriptions: [
        'Paracetamol 500mg - 1 tablet, 3 times a day for 5 days',
        'Multivitamin - 1 tablet daily for 30 days'
      ],
      test_results: [
        'Blood Pressure: 120/80 mmHg (Normal)',
        'Cholesterol: 180 mg/dL (Normal)',
        {
          title: 'View Full Lab Report (PDF)',
          type: 'pdf',
          url: 'https://example.com/labreport.pdf'
        }
      ],
      notes_from_doctor: 'Patient presented with mild fatigue. Advised to maintain a balanced diet and regular exercise. Follow-up in 6 months for routine check-up.',
      allergies: ['Dusting and Intense smell'],
      related_images: [
        {
          title: 'X-Ray Scan',
          url: '#'
        },
        {
          title: 'MR Scan',
          url: '#'
        }
      ],
      surgery_details: 'Minor brain swelling treated without surgery.'
    },
    {
      date: '2025-05-22',
      hospital: 'XYZ Hospital',
      doctor: {
        name: 'Dr. Suresh Raskar',
        designation: 'Neuro Surgeon',
        contact: '7410258968',
        timing: '9am - 5pm'
      },
      reason: 'Head Injury',
      prescriptions: [
        'Paracetamol 500mg - 1 tablet, 3 times a day for 5 days',
        'Multivitamin - 1 tablet daily for 30 days'
      ],
      test_results: [
        'Blood Pressure: 120/80 mmHg (Normal)',
        'Cholesterol: 180 mg/dL (Normal)',
        {
          title: 'View Full Lab Report (PDF)',
          type: 'pdf',
          url: 'https://example.com/labreport.pdf'
        }
      ],
      notes_from_doctor: 'Patient presented with mild fatigue. Advised to maintain a balanced diet and regular exercise. Follow-up in 6 months for routine check-up.',
      allergies: ['Dusting and Intense smell'],
      related_images: [
        {
          title: 'X-Ray Scan',
          url: '#'
        },
        {
          title: 'MR Scan',
          url: '#'
        }
      ],
      surgery_details: 'Minor brain swelling treated without surgery.'
    }
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-[70%] mx-auto mt-10'>
      <div>
            <div className='text-2xl text-white pt-1 text-center rounded-3xl font-bold bg-[#78B0B4] w-[90px] h-[45px]'>
                <Link to="/hospitals">
                    <button className='hover:text-black'>
                        Back
                    </button>
                </Link>
            </div>
            <div className='text-center mb-10'>
                <p className='font-bold text-3xl text-[#217E7E] '>ABC Hospital</p>
                <p className='pt-5 font-normal'>ABC Hospital, JM Road, Pune, Maharashtra - 414102</p>
            </div>
      </div>
      {data.length === 0 ? (
        <p className='text-center text-gray-600'>No medical data available for this hospital.</p>
      ) : (
        <div className='bg-white shadow rounded-lg overflow-hidden transition-all duration-500'>
          {data.map((item, index) => (
            <div key={index} className='border-b'>
              <div className='flex justify-between items-center p-4 bg-[#217E7E] text-white'>
                <p className='font-semibold'>Date : {item.date}</p>
                <div>
                  <p className='font-semibold'>{item.doctor.name}</p>
                  <p className='text-sm'>{item.doctor.designation}</p>
                </div>
                <p className='font-semibold'>Reason : {item.reason}</p>
                <button onClick={() => toggleDropdown(index)}>
                  {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </button>
              </div>
              <div
                className={`bg-[#ECE8E8] transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[1000px] p-4' : 'max-h-0'}`}
              >
                <div className='grid md:grid-cols-2 gap-4 text-sm opacity-100'>
                  <div className='text-black'>
                    <h3 className='font-bold text-[16px] mb-1'>Prescriptions:</h3>
                    <ul className='list-disc text-black  pl-5'>
                      {item.prescriptions?.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  </div>
                  <div className='text-black'>
                    <h3 className='font-bold text-[16px] mb-1'>Test Results:</h3>
                    <ul className='list-disc pl-5'>
                      {item.test_results?.map((res, i) => (
                        typeof res === 'string' ? <li key={i}>{res}</li> :
                        <li key={i}><a href={res.url} className='text-blue-600 underline'>{res.title}</a></li>
                      ))}
                    </ul>
                  </div>
                  <div className='text-black col-span-2'>
                    <h3 className='font-bold text-[16px]'>Notes from Doctor:</h3>
                    <p>{item.notes_from_doctor}</p>
                  </div>
                  {item.related_images && item.related_images.length > 0 && (
                    <div className='col-span-2 text-black'>
                      <h3 className='font-bold text-[16px] mb-1'>Related Images:</h3>
                      <div className='flex gap-4'>
                        {item.related_images.map((img, i) => (
                          <a key={i} href={img.url} className='bg-gray-300 px-4 py-2 rounded'>{img.title}</a>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className='col-span-2 text-black'>
                    <h3 className='font-bold text-[16px]'>Allergies:</h3>
                    <p>{item.allergies?.join(', ')}</p>
                  </div>
                  {item.surgery_details && (
                    <div className='col-span-2 text-black'>
                      <h3 className='font-bold text-[16px]'>Surgery Details:</h3>
                      <p>{item.surgery_details}</p>
                    </div>
                  )}
                  <div className='col-span-2 text-black'>
                    <h3 className='font-bold text-[16px]'>Doctor details:</h3>
                    <div>
                      <p>Name : {item.doctor.name}</p>
                      <p>Time : {item.doctor.timing}</p>
                      <p>Designation : {item.doctor.designation}</p>
                      <p>Contact : {item.doctor.contact}</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MedicalData;
