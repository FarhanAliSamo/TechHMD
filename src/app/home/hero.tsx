import Button from '@/components/atoms/button'
import React from 'react'

const Hero = () => {


  return (
    <div className='h-screen w-full relative flex items-center '>
        
        <div className="bg-[#3A3B62] opacity-60 w-full h-full absolute left-0 top-0 -z-0"></div>
        <img src="/assets/images/banners/home-hero.png" alt="" className="w-full h-full absolute left-0 top-0 object-cover object-top -z-10"/>
        
        <div className="px-[150px] relative top-5">
            
            <h1 className='text-4xl text-white  drop-shadow mb-3'>You Envision  <br />
            We Rev  Revolutioniz_</h1>

            <h4 className='text-xl text-white  drop-shadow '>Your partner in building <br />
            innovative solutions</h4>

            <Button className="bg-white text-black mt-4 me-2 hover:bg-transparent hover:backdrop-blur-md hover:text-white " title="Let’s Buid Together"/>
            
            <Button className="bg-transparent backdrop-blur-md text-white mt-4 hover:bg-white hover:text-black " title="Learn More"/>


        </div>

    
    </div>
  )
}

export default Hero