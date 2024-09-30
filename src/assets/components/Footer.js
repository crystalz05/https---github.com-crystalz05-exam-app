import React from 'react'

import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhoneAlt} from 'react-icons/fa'

function Footer() {
  return (
    <div className='pt-5 container mx-auto bottom-2 w-full lg:py-6 shadow-xl bg-slate-600'>
      <div className='flex flex-col items-center w-full justify-center flex text-white font-third tracking-wider text-4xl'>
        <h1 className='mb-3'>Yokoso</h1>
        <div className='border border-yellow-300 w-[100px]'></div>
      </div>
      <div className='lg:flex justify-between w-full border-b  pb-8 border-white/30'>
        <div className='lg:ml-5 w-full lg:justify-start justify-center flex font-secondary text-white items-center'>
          <FaPhoneAlt className='text-blue-300 text-2xl'/>
          <h1 className='lg:ml-5 ml-2 my-5 text-xl tracking-wide'>08132743494</h1>
        </div>
        <div className='lg:flex items-center text-2xl items-center text-center'>
          <div className='text-sm uppercase text-white lg:mb-0 mb-3 lg:w-[200px] lg:text-right'>Follo us on social media</div>
          <div className='flex gap-x-4 lg[200px] lg:justify-between justify-around lg:mx-5 mx-24 lg:mr-5'>
            <a href='#'><FaFacebook className='text-white'/></a>
            <a href='#'><FaInstagram className='text-white'/></a>
            <a href='#'><FaLinkedin className='text-white'/></a>
            <a href='#'><FaTwitter className='text-white'/></a>
          </div>
        </div>

      </div>




        
    </div>
  )
}

export default Footer


// absolute left-1/2 right-1/2 transform -translate-x-1/2 