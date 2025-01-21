"use client";
import {getHomeServices } from "@/lib/api/home";
import React, { useEffect, useState } from "react";
 
const ServiceSection = () => {
 
const [data, setData] = useState<HomeServices[] | null>(null);
 
const getServices = async () => {
  const {
    data: { data }, 
  } = await getHomeServices();
  setData(data);
  console.log(data)
};
  
useEffect(() => {
  getServices();
}, []);
 
  return (
    <div className="w-full lg:px-[120px] md:px-[80px] sm:px-[40px] px-[20px]  lg:py-16 md:py-14 py-10 relative">

      <img src="/assets/images/textures/blue-texture.png"  className='object-cover  w-full h-full absolute left-0 top-0 -z-10' alt="" />
      
      <h3 className="text-slate-900 text-center uppercase font-medium lg:mb-2 mb-1 lg:text-2xl md:text-xl sm:text-lg text-sm ">Our Core Products</h3>
      
      <h2 className="text-slate-900  lg:text-3xl  md:text-2xl sm:text-xl text-lg  text-center uppercase font-semibold max-md:leading-5 ">
        Integrate innovation at the core of your business
      </h2>

      <p className="text-slate-900  md:text-sm text-xs  text-center capitalize mt-2" >
        We believe in transforming the journey of businesses with the
        integration of our products
      </p>  

      <div className="grid grid-cols-12 lg:my-10 md:my-8 my-7 max-sm:mb-0   lg:gap-4 md:gap-3 gap-2 max-md:gap-y-3">
       
        <div className="lg:col-span-4 col-span-6 bg-[#3A3B62] flex flex-col items-center justify-center text-center px-5 lg:py-8 py-5 gap-2 rounded-tl-3xl max-lg:rounded-xl group transition-all duration-200 lg:hover:scale-105 hover:outline hover:outline-2 hover:outline-[#6a6ba8] hover:shadow-lg hover:shadow-slate-600 hover:bg-[#35365b] shadow-md shadow-slate-400 border-2 border-white  ">

          <img src={data?.[0]?.logo} alt="" className="lg:w-[100px] md:w-[80px] sm:w-[60px] w-[40px]"/>
          <h3 className="text-white lg:text-xl sm:text-lg text-sm   lg:font-medium font-semibold mt-3">{data?.[0]?.name}</h3>
          <p className="text-white text-xs ">
            {data?.[0]?.shortDescription}
          </p>
          
        </div>

        <div className="lg:col-span-4 col-span-6 bg-[#3A3B62] flex flex-col items-center justify-center text-center px-5 lg:py-8 py-5 gap-2   group transition-all duration-200 lg:hover:scale-105 hover:outline  hover:outline-2 hover:outline-[#6a6ba8] hover:shadow-lg hover:shadow-slate-600 hover:bg-[#35365b] shadow-md shadow-slate-400 border-2 border-white  max-lg:rounded-xl">

          <img src={data?.[1]?.logo} alt="" className="lg:w-[100px] md:w-[80px] w-[60px]"/>
          <h3 className="text-white lg:text-xl sm:text-lg text-sm   lg:font-medium font-semibold mt-3">{data?.[1]?.name}</h3>
          <p className="text-white text-xs ">
            {data?.[1]?.shortDescription}
          </p>
          
        </div>
        
        <div className="lg:col-span-4 col-span-6 bg-[#3A3B62] flex flex-col items-center justify-center text-center px-5 lg:py-8 py-5 gap-2  rounded-tr-3xl max-lg:rounded-xl group transition-all duration-200 lg:hover:scale-105 hover:outline   hover:outline-2 hover:outline-[#6a6ba8] hover:shadow-lg hover:shadow-slate-600 hover:bg-[#35365b] shadow-md shadow-slate-400 border-2 border-white ">

          <img src={data?.[2]?.logo} alt="" className="lg:w-[100px] md:w-[80px] w-[60px]"/>
          <h3 className="text-white lg:text-xl sm:text-lg text-sm   lg:font-medium font-semibold mt-3">{data?.[2]?.name}</h3>
          <p className="text-white text-xs ">
            {data?.[2]?.shortDescription}
          </p>
          
        </div>
        
        <div className="lg:col-span-4 col-span-6 bg-[#3A3B62] flex flex-col items-center justify-center text-center px-5 lg:py-8 py-5 gap-2   rounded-bl-3xl max-lg:rounded-xl  group transition-all duration-200 lg:hover:scale-105 hover:outline   hover:outline-2 hover:outline-[#6a6ba8] hover:shadow-lg hover:shadow-slate-600 hover:bg-[#35365b] shadow-md shadow-slate-400 border-2 border-white ">

          <img src={data?.[3]?.logo} alt="" className="lg:w-[100px] md:w-[80px] w-[60px]"/>
          <h3 className="text-white lg:text-xl sm:text-lg text-sm   lg:font-medium font-semibold mt-3">{data?.[3]?.name}</h3>
          <p className="text-white text-xs ">
            {data?.[3]?.shortDescription}
          </p>
          
        </div>
        
        <div className="lg:col-span-4 col-span-6 bg-[#3A3B62] flex flex-col items-center justify-center text-center px-5 lg:py-8 py-5 gap-2 group transition-all duration-200 lg:hover:scale-105 hover:outline   hover:outline-2 hover:outline-[#6a6ba8] hover:shadow-lg hover:shadow-slate-600 hover:bg-[#35365b] shadow-md shadow-slate-400 border-2 border-white max-lg:rounded-xl">

          <img src={data?.[4]?.logo} alt="" className="lg:w-[100px] md:w-[80px] w-[60px]"/>
          <h3 className="text-white lg:text-xl sm:text-lg text-sm   lg:font-medium font-semibold mt-3">{data?.[4]?.name}</h3>
          <p className="text-white text-xs ">
            {data?.[4]?.shortDescription}
          </p>
          
        </div>

        <div className="lg:col-span-4 col-span-6 bg-[#3A3B62] flex flex-col items-center justify-center text-center px-5 lg:py-8 py-5 gap-2  rounded-br-3xl  max-lg:rounded-xl  group transition-all duration-200 lg:hover:scale-105 hover:outline   hover:outline-2 hover:outline-[#6a6ba8] hover:shadow-lg hover:shadow-slate-600 hover:bg-[#35365b] shadow-md shadow-slate-400 border-2 border-white ">

          <img src={data?.[5]?.logo} alt="" className="lg:w-[100px] md:w-[80px] w-[60px]"/>
          <h3 className="text-white lg:text-xl sm:text-lg text-sm   lg:font-medium font-semibold mt-3">{data?.[5]?.name}</h3>
          <p className="text-white text-xs ">
            {data?.[5]?.shortDescription}
          </p>
          
        </div>

      </div>
      
    </div>
  );
};

export default ServiceSection;
