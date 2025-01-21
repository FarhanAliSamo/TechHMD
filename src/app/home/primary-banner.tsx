"use client";
import Button from "@/components/atoms/button";
import { getHomePrimaryBanner } from "@/lib/api/home";
import React, { useEffect, useState } from "react";

const PrimaryBanner = () => {
  
  const [data, setData] = useState<HomePrimaryBanner | null>(null);

  const getBanner = async () => {
    const {
      data: { data },
    } = await getHomePrimaryBanner();

    setData(data[0]);
  
  };
  
  useEffect(() => {
    getBanner();
  }, []);


  return (

    <div className="lg:min-h-screen h-[400px] w-full relative flex items-center ">
      {/* " w-full   py-5 lg:pb-[120px] md:pb-[100px] pb-[80px] relative" */}

      <img
        src="/assets/images/shapes/diamond_shape.png"
        alt=""
        className="lg:w-[150px] md:w-[120px] w-[60px] absolute lg:-bottom-[96px] md:-bottom-[75px] -bottom-[40px] right-5 z-10 "
      />

      <div className="bg-white opacity-60 w-full h-full absolute left-0 top-0 -z-0"></div>
      <img
        src={data?.primaryImage}
        alt=""
        className="w-full h-full absolute left-0 top-0 object-cover object-top -z-10"
      />

      <div className="lg:px-[150px] md:px-[80px] sm:px-[40px] px-[20px] relative top-5 pr-[50px] ">

        <div className="grid  grid-cols-12 gap-5 items-center justify-center">
        
          <div className="lg:col-span-6 col-span-12">  
            <h1 className="lg:text-4xl md:text-3xl sm:text-xl text-lg text-black font-semibold drop-shadow mb-4 uppercase">
              {data?.title}
            </h1>

            <p className="sm:text-sm text-xs text-black  drop-shadow ">
            {data?.description}
            </p>

            <Button
              className="bg-[#3A3B62] hover:bg-transparent backdrop-blur-md text-white mt-8  hover:text-[#3A3B62] border-[#3A3B62]"
              title="Learn More"
            />

          </div>

          <div className="col-span-6 flex items-end h-[70vh] max-lg:hidden">
            <img
              src={data?.secondaryImage}
              alt=""
              className="w-full object-cover object-center shadow-lg border-2 shadow-slate-500 border-white hover:scale-105 transition-all"
            />
          </div>



        </div>
      </div>
    </div>
  );
};

export default PrimaryBanner;
