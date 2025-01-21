import React from 'react'
import { Icon } from "@iconify/react";

const MobileMenu = () => {
  return (
    <div className='bg-[#3a3b626e] backdrop-blur-lg shadow-2xl shadow-slate-500 px-[20px] pt-[10px] rounded-t-xl fixed w-full bottom-0 left-0 z-50 mobile_nav'>

        <div className="flex items-center justify-between">
             
            <a href="#" className='flex flex-col items-center justify-center w-[50px]  pb-1'>
                <Icon icon="icon-park-solid:laptop-computer" className=' text-[20px] mb-[2px] text-white'  />
                 <label className='text-white text-[10px]'>Portfolio</label>
            </a>
            <a href="#" className='flex flex-col items-center justify-center w-[50px]  pb-1'>
                <Icon icon="material-symbols-light:developer-guide-rounded" className=' text-[20px] mb-[2px] text-white'  />
                 <label className='text-white text-[10px]'>Services</label>
            </a>
            
            <a href="#" className='flex flex-col items-center justify-center w-[50px]  pb-1'>
                <Icon icon="ion:home" className=' text-[22px] mb-[2px] text-white'  />
                 <label className='text-white text-[10px]'>Home</label>
            </a>


            <a href="#" className='flex flex-col items-center justify-center w-[50px]  pb-1'>
                <Icon icon="line-md:chat-filled" className=' text-[20px] mb-[2px] text-white'  />
                 <label className='text-white text-[10px]'>Contact</label>
            </a>

            <a href="#" className='flex flex-col items-center justify-center w-[50px]  pb-1'>
                <Icon icon="ri:team-fill" className=' text-[20px] mb-[2px] text-white'  />
                 <label className='text-white text-[10px]'>About</label>
            </a>


        </div>
        
    </div>
  )
}

export default MobileMenu