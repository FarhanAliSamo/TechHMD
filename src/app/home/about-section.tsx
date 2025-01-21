"use client";

import Button from '@/components/atoms/button'
import { getHomeAbout, getHomeAboutCounter } from '@/lib/api/home';
import React, { useEffect, useState } from "react";


const AboutSection = () => {

    const [data, setData] = useState< HomeAbout | null >(null);
    const [counterData, setCounterData] = useState< HomeCounters[] | null >(null);
    
    
    const getCounters = async () => {
        const {
          data: { data },
        } = await getHomeAboutCounter();
        setCounterData(data)
    };

    const getHomeData = async () => {
      const {
        data: { data },
      } = await getHomeAbout();

      setData(data);
      console.log(data)
    };

    useEffect(() => {
        getHomeData(); 
        getCounters();
    }, []);


  return (
    <div className='grid grid-cols-12 min-h-screen w-full lg:px-[120px] md:px-[80px] sm:px-[40px] px-[20px]  sm:gap-6 gap-0 sm:mb-0 mb-10  items-center justify-center ' >

        <div className="sm:col-span-7 col-span-12 sm:mt-0 mt-10">
            
            <h3 className='lg:mb-3 sm:mb-2 mb-1 lg:text-2xl md:text-xl sm:text-lg text-sm '>Empowering Enterprises</h3>
            <h1 className='lg:text-6xl  md:text-4xl text-xl  text-slate-900 font-bold uppercase about_heading'>{data?.heading}</h1>
            
            <p className='md:text-sm text-xs  sm:my-3 my-1 mt-2'>{data?.description}</p>

            <Button className="bg-[#3A3B62] backdrop-blur-md mt-4 hover:bg-transparent hover:text-[#3A3B62] border  border-[#3A3B62] text-white" title="Learn More"/>
        </div>

        <div className="sm:col-span-5 col-span-12 ">
        
            <div className="grid grid-cols-2 lg:gap-4 gap-3  ">  

            {counterData?.map((counter) => (
                        <div
                            key={counter.id}
                            id={`counter-${counter.id}`}
                            className="col-span-1 flex flex-col items-center justify-center gap-2 border-2 border-slate-800 rounded-sm lg:min-h-[150px] md:min-h-[140px] min-h-[120px]"
                        >
                            <h3 className="lg:text-4xl md:text-3xl text-xl sm:font-semibold font-medium">{counter.number} </h3>
                            <p className="lg:text-sm text-xs font-medium">{counter.title}</p>
                        </div>
                    ))}
 

            </div>

        </div>

    </div>
  )
}

export default AboutSection