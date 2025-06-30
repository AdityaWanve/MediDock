import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import profile from '../assets/profileicon.png'

const Testimonial = () => {
  const testimonials = [
    {
      name: "Soham Sonawane",
      text: "One of the best platform to track medical data with minimal efforts. Also it give easy access to the hospital and doctor for urgent requirements!"
    },
    {
      name: "Sid Patil",
      text: "Good platform to chech medical records. Helps to control data access and also provide accurate info in proper format."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[50px] mb-[50px] bg-transparent">
      <div className="bg-[#357080] opacity-82 rounded-2xl p-6 pb-[30px] w-[1000px] h-[250px] flex items-center justify-between">
        <button onClick={handlePrev} className="text-black font-bold mt-[20px] ml-[10px] focus:outline-none">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="text-left">
          <h2 className="text-white text-center text-3xl font-semibold mb-4">Testimonials</h2>
          <div className="flex items-center justify-left mb-2">
            <div className="w-10 h-10 bg-[#D3D3D3] rounded-full mr-2 flex items-center justify-center">
              <img src={profile} alt='Profile icon' />
            </div>
            <span className="text-white text-left text-lg font-bold">{testimonials[currentIndex].name}</span>
          </div>
          <p className="text-black text-[20px] w-[700px]">
            {testimonials[currentIndex].text}
          </p>
        </div>

        <button onClick={handleNext} className="text-black font-bold focus:outline-none mt-[20px] mr-[10px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className='w-[350px] h-[60px] rounded-xl bg-[#306B7C] mt-[80px] text-center justify-center items-center'>
        <Link to="/login">
          <button className='text-white font-bold text-3xl pt-[10px] pl-[10px] hover:text-black'>
            Get Started →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Testimonial;