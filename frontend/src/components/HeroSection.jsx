import React from 'react'
import HeroImg from '../assets/HeroImg.png'

const HeroSection = () => {
    return(
        <>
            <div className='flex items-center justify-around m-[25px] pt-[20px]'>
                <div className='w-[30%] flex flex-col'>
                    <div className='w-[500px] text-left pl-[10px] mb-[50px]'>
                        <h1 className='font-black text-6xl'>Welcome, Manish Patil</h1>
                    </div>
                    <div className='mt-[50px]'>
                        <p className='mb-[25px] text-2xl'>Track Medical data and stay healthy without any overhead of physical files! </p>
                        <p className='mt-[25px] text-2xl'>Wishing you a file-free life</p>
                    </div>
                </div>
                <div className='w-[30%]'>
                    <img className='w-[600px] h-[400px]' src={HeroImg} alt="Hero Image" />
                </div>
            </div>
        </>
    )
}

export default HeroSection;
