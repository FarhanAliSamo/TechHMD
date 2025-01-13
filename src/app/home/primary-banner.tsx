import React from 'react'
import Button from '@/components/atoms/button'


const PrimaryBanner = () => {
  return (
    <div className='h-screen w-full relative flex items-center '>
        
        <div className="bg-white opacity-60 w-full h-full absolute left-0 top-0 -z-0"></div>
        <img src="/assets/images/banners/banner-1.png" alt="" className="w-full h-full absolute left-0 top-0 object-cover object-top -z-10"/>
        
        <div className="px-[150px] relative top-5 pr-[50px]">


          <div className="grid  grid-cols-12 gap-5 items-center justify-center">
            
            <div className="col-span-6">

              <h1 className='text-4xl text-black font-semibold drop-shadow mb-4 uppercase'>Build the enterprise in
              the digital world</h1>

              <p className='text-sm text-black  drop-shadow '>We are dedicated to guiding you to navigate through the 
digital realm 
in order to grow your business from
the introduction phase </p>

              <Button className="bg-[#3A3B62] hover:bg-transparent backdrop-blur-md text-white mt-8  hover:text-[#3A3B62] border-[#3A3B62]" title="Learn More"/>
            
            </div>

            <div className="col-span-6 flex items-end h-[70vh] ">
              <img src="/assets/images/banners/banner-2.png" alt="" className="w-full object-cover object-center shadow-lg"/>
            </div>

            </div>  
           
        </div>

    
    </div>
  )
}

export default PrimaryBanner



 