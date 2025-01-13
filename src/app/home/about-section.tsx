import Button from '@/components/atoms/button'
import React from 'react'

const AboutSection = () => {
  return (
    <div className='grid grid-cols-12 h-screen w-full px-[120px] gap-6 items-center justify-center ' >

        <div className="col-span-7">
            
            <h3 className='mb-3 text-2xl'>Empowering Enterprises</h3>
            <h1 className='text-6xl text-slate-900 font-bold uppercase'>Conquer the world with us</h1>
            
            <p className='text-sm my-3'>We are dedicated to guiding you to navigate through the digital realm 
            in order to grow your business from the introduction phase to th
            We envision driving positive outcomes by allocating our expertise and
            tech solutions. Our detailed and strategic approach allows us to deliver a
            distinctive user experience. Let’s touch the horizons with digitalization.</p>

            <Button className="bg-transparent backdrop-blur-md text-slate-800 mt-4 hover:bg-[#3A3B62] hover:text-white border-black hover:border-[#3A3B62]" title="Learn More"/>
        </div>

        <div className="col-span-5">
        
            <div className="grid grid-cols-2 gap-4">

                <div className="col-span-1 flex flex-col items-center justify-center gap-2 border-2 border-slate-800 rounded-sm min-h-[150px]">
                    <h3 className='text-4xl font-semibold'>30+</h3>
                    <p className='text-sm font-medium'>Countries Served</p>
                </div>
                

                <div className="col-span-1 flex flex-col items-center justify-center gap-2 border-2 border-slate-800 rounded-sm min-h-[150px]">
                    <h3 className='text-4xl font-semibold'>90+</h3>
                    <p className='text-sm font-medium'>Countries Served</p>
                </div>

                <div className="col-span-1 flex flex-col items-center justify-center gap-2 border-2 border-slate-800 rounded-sm min-h-[150px]">
                    <h3 className='text-4xl font-semibold'>50+</h3>
                    <p className='text-sm font-medium'>Countries Served</p>
                </div>

                <div className="col-span-1 flex flex-col items-center justify-center gap-2 border-2 border-slate-800 rounded-sm min-h-[150px]">
                    <h3 className='text-4xl font-semibold'>80+</h3>
                    <p className='text-sm font-medium'>Countries Served</p>
                </div>

            </div>

        </div>

    </div>
  )
}

export default AboutSection