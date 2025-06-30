import React from 'react'

function Footer() {
  return (
    <>
      <div className='bg-[#217E7E] mt-[30px] pt-[30px] flex flex-col text-center'>
        <div className='w-full h-[270px] text-left flex justify-around '>
          <div className='text-white'>
              <p className='text-2xl font-bold'>Follow Us</p>
              <section className='mt-[20px]'>
                  <p className='pt-[10px]'>Facebook</p>
                  <p className='pt-[10px]'>Instagram</p>
                  <p className='pt-[10px]'>Twitter</p>
              </section>
          </div>
          <div className='text-white'>
              <p className='text-2xl font-bold'>Quick Links</p>
              <section className='mt-[20px]'>
                  <p className='pt-[10px] hover:text-[#000000]'><a href="/">Home</a></p>
                  <p className='pt-[10px] hover:text-[#000000]'><a href="/#about">About Us</a></p>
                  <p className='pt-[10px] hover:text-[#000000]'><a href="/#features">Features</a></p>
                  <p className='pt-[10px] hover:text-[#000000]'><a href="/">Terms & Conditions</a></p>
                  <p className='pt-[10px] hover:text-[#000000]'><a href="/contact">Contact Us</a></p>
              </section>
          </div>
          <div className='text-white'>
              <p className='text-2xl font-bold'>Contact Details</p>
              <section className='mt-[20px]'>
                  <p className='pt-[10px]'>Email: support@healthcardplatform.com</p>
                  <p className='pt-[10px]'>Phone: +91-XXXXXXXXXX</p>
                  <p className='pt-[10px]'> Address: Pune, Maharashtra, India</p>
              </section>
          </div>
        </div>
        <div className='text-white mb-5'>
          <p>© 2025 HealthConnect. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}



export default Footer
