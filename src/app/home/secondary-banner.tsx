import Button from '@/components/atoms/button'
import React from 'react'

const SecondaryBanner = () => {


  return (
    <div className='h-[400px] w-full relative flex flex-col items-center justify-center text-center'>
        
        <div className="bg-[#3A3B62] opacity-70 w-full h-full absolute left-0 top-0 -z-10"></div>
        <img src="/assets/images/banners/banner-3.png" alt="" className="w-full h-full absolute left-0 top-0 object-cover object-top -z-20"/>
        
        <img src="/assets/images/shapes/white-line-seprator.png" alt="" className="w-full absolute left-0 top-0"/>
        
         
            
            <div className='relative top-5'>
              
            <h1 className='text-4xl text-white  drop-shadow uppercase mb-3'>Your success starts right here</h1>

            <Button className="bg-white text-black mt-5 me-2 hover:bg-transparent hover:backdrop-blur-md hover:text-white px-8" title="join us"/>
            
            </div>
 

    
    </div>
  )
}

export default SecondaryBanner