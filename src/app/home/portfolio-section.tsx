"use client";

import { getHomePortfolio } from "@/lib/api/home";
import "../../styles/hexagon.css";
import React, { useEffect, useState } from "react";

const PortfolioSection = () => {
  const [data, setData] = useState<HomePortfolio[] | null>(null);

  const getPortfolio = async () => {
    const {
      data: { data },
    } = await getHomePortfolio();

    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  return (
    <div className="w-full lg:px-[120px] md:px-[80px] sm:px-[40px] px-[20px]  py-5 lg:pb-[120px] md:pb-[100px] pb-[80px] relative">
      <img
        src="/assets/images/textures/blue-texture.png"
        className="object-cover  w-full h-full absolute left-0 top-0  -z-10"
        alt=""
      />

     <div className="flex flex-col items-center">
      <h3 className="text-slate-900 text-center uppercase font-medium lg:mb-2 mb-1 lg:text-2xl md:text-xl sm:text-lg text-sm">
          Our Projects
        </h3>

        <h2 className="text-slate-900  lg:text-3xl  md:text-2xl sm:text-xl text-lg  text-center uppercase font-semibold max-md:leading-5">
          Delve Into Our <br />
          Pioneering Projects
        </h2>

        <p className="text-slate-900  md:text-sm text-xs  text-center capitalize mt-2 max-w-[600px]">
          We are dedicated to guiding you to navigate through the digital realm{" "}
          to grow your business from the introduction phase to th .
        </p>
     </div>

      <section className="hexagon-gallery lg:pt-10 md:pt-8 pt-5  ">
        {data?.map((item, index) => (
          <div className="hex" key={index}>
            <img src={item.image} alt="some" />
          </div>
        ))}
 
      </section>
    </div>
  );
};

export default PortfolioSection;
