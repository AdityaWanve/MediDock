import React from 'react'

const Features = () => {
    return ( 
        <>
            <div id="features" className=' flex flex-col justify-center text-center items-center'>
                <div className='mt-[50px] mb-[15px]'>
                    <p className='text-3xl font-bold text-[#0E4D5E]'>Features</p>
                </div>
                <div className='flex grid grid-cols-2'>
                    <div className='w-[400px] h-[200px]  bg-[#78B0B4] rounded-lg m-[60px]'>
                        <p className='text-2xl font-bold text-[#0E4D5E] mt-[20px]'>Digital Medical Card</p>
                        <p className='text-[20px] mt-[35px] font-normal'>Your health ID, always accessible</p>
                    </div>
                    <div className='w-[400px] h-[200px]  bg-[#78B0B4] rounded-lg m-[60px]'>
                        <p className='text-2xl font-bold text-[#0E4D5E] mt-[20px]'>Track Medical History Anytime</p>
                        <p className='text-[20px] mt-[35px] font-normal'>View past treatments anytime, anywhere</p>
                    </div>
                    <div className='w-[400px] h-[200px]  bg-[#78B0B4] rounded-lg m-[60px]'>
                        <p className='text-2xl font-bold text-[#0E4D5E] mt-[20px]'>Control Data Privacy</p>
                        <p className='text-[20px] mt-[35px] font-normal'>You choose what data is shared</p>
                    </div>
                    <div className='w-[400px] h-[200px]  bg-[#78B0B4] rounded-lg m-[60px]'>
                        <p className='text-2xl font-bold text-[#0E4D5E] mt-[20px]'>Access Hospital & Doctor Info</p>
                        <p className='text-[20px] mt-[35px] font-normal'>Quick contact with hospitals and doctors</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Features;
