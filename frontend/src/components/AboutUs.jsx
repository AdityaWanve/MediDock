import React from 'react'

const AboutUs = () => {
    return(
        <>
            <div id="about" className='w-full h-[300px] bg-[#217E7E] mt-[55px] flex flex-col justify-center text-center items-center'>
                {/* Title div block */}
                <div className='mt-[20px] mb-[20px]'>
                    <p className='text-3xl font-bold text-white'>About Us</p>
                </div>
                 {/* About us content div block */}
                <div className='max-w-[1000px] text-white text-justify mb-[20px]'>
                    <p className='text-2xl leading-relaxed font-thin'>
                        Health Card Platform is a digital solution designed to replace traditional physical 
                        medical files.  We help users securely store and manage their complete medical history 
                        in one place.  From doctor visits to prescriptions and test reports, everything is just a 
                        click away.  Our platform ensures user privacy with full control over what data is shared.  
                        We aim to make healthcare access smarter, simpler, and more reliable for everyone.
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutUs;