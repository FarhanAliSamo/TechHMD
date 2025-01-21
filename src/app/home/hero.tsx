"use client";

import { getHeroSectionByPageName } from "@/lib/api/home";
import Button from "@/components/atoms/button";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [data, setData] = useState<HomeHero | null>(null);
 
  const getHeroSectionData = async () => { 
    const {
      data: { data },
    } = await getHeroSectionByPageName("home");
    setData(data[0]);
  };

  useEffect(() => {
    getHeroSectionData();
  }, []);

  return (
    <div className="min-h-screen w-full relative flex items-center">
      <div className="bg-[#3A3B62] opacity-60 w-full h-full absolute left-0 top-0 -z-0"></div>
      
      <img
        src={data?.media}
        alt=""
        className="w-full h-full absolute left-0 top-0 object-cover object-top -z-10"
      />

      <div className="lg:px-[120px] md:px-[80px] sm:px-[40px] px-[20px]  relative top-5">
        <h1 className="lg:text-4xl md:text-3xl text-2xl text-white  drop-shadow mb-3">
          {data?.title}
        </h1>

        <h4 className="lg:text-xl sm:text-lg text-sm text-white  drop-shadow  mb-3">
          {data?.description}
        </h4>

        <Button
          className="bg-white text-black mt-4 me-2 hover:bg-transparent hover:backdrop-blur-md hover:text-white "
          title="Let’s Buid Together"
        />

        <Button
          className="bg-transparent backdrop-blur-md text-white mt-4 hover:bg-white hover:text-black "
          title="Learn More"
        />
      </div>

    </div>
  );
};

export default Hero;
