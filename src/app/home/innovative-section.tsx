"use client";

import { getHomeInnnovations } from "@/lib/api/home";
import React, { useEffect, useState } from "react";

const InnovativeSection = () => {
  const [data, setData] = useState<HomeInnovation | null>(null);

  const getInnovations = async () => {
    const {
      data: { data },
    } = await getHomeInnnovations();

    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getInnovations();
  }, []);

  return (
    <div className="grid grid-cols-12 min-h-screen relative w-full lg:px-[150px] md:px-[80px] sm:px-[40px] px-[20px]    lg:gap-12 md:gap-10 gap-8 items-center justify-center py-16 sm:mb-10 mb-0">
      <div className="lg:col-span-6 md:col-span-7 md:order-1 order-2 col-span-12">
        <div className="grid grid-cols-12 lg:gap-4 gap-2">
          <div className="col-span-6 flex flex-col lg:gap-4 gap-2">
            <div className=" flex flex-col items-center justify-center gap-2 border-2 border-white py-8 bg-[#3A3B62] text-center sm:px-5 px-3 rounded-lg transition-all hover:bg-[#323359] cursor-pointer   shadow-600 hover:shadow-lg hover:shadow-slate-700 shadow-md shadow-slate-500">
              <img src={data?.innovations[0]?.icon} className="mb-2 sm:w-[60px] w-[40px] " alt="" />

              <h3 className="sm:text-base text-sm  font-md uppercase text-white">
                {data?.innovations[0]?.title}
              </h3>
              <p className="text-xs text-white">
                {data?.innovations[0]?.description}
              </p>
            </div>

            <div className=" flex flex-col items-center justify-center gap-2 border-2 border-white py-8 bg-[#3A3B62] text-center sm:px-5 px-3 rounded-lg transition-all hover:bg-[#323359] cursor-pointer   shadow-600 hover:shadow-lg hover:shadow-slate-700 shadow-md shadow-slate-500">
              <img src={data?.innovations[1]?.icon} className="mb-2 sm:w-[60px] w-[40px] " alt="" />
              <h3 className="sm:text-base text-sm  font-md uppercase text-white">
                {data?.innovations[1]?.title}
              </h3>
              <p className="text-xs text-white">
                {data?.innovations[1]?.description}
              </p>
            </div>
          </div>

          <div className="col-span-6 flex flex-col lg:gap-4 gap-2 relative lg:top-10 ">
            <div className=" flex flex-col items-center justify-center gap-2 border-2 border-white py-8 bg-[#3A3B62] text-center sm:px-5 px-3  rounded-lg transition-all hover:bg-[#323359] cursor-pointer shadow-md shadow-600 hover:shadow-lg hover:shadow-slate-700  shadow-slate-500">
              <img src={data?.innovations[2]?.icon} className="mb-2 sm:w-[60px] w-[40px] " alt="" />
              <h3 className="sm:text-base text-sm  font-md uppercase text-white">
                {data?.innovations[2]?.title}
              </h3>
              <p className="text-xs text-white">
                {data?.innovations[2]?.description}
              </p>
            </div>

            <div className=" flex flex-col items-center justify-center gap-2 border-2 border-white py-8 bg-[#3A3B62] text-center sm:px-5 px-3 rounded-lg transition-all hover:bg-[#323359] cursor-pointer shadow-md shadow-600 hover:shadow-lg hover:shadow-slate-700   shadow-slate-500">
              <img src={data?.innovations[3]?.icon} className="mb-2 sm:w-[60px] w-[40px] " alt="" />
              <h3 className="sm:text-base text-sm  font-md uppercase text-white">
                {data?.innovations[3]?.title}
              </h3>

              <p className="text-xs text-white">
                {data?.innovations[3]?.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 md:col-span-5 col-span-12 md:order-2 order-1 max-md:text-center">
        <h3 className=" lg:mb-3 mb-1 lg:text-2xl sm:text-xl text-sm">
          {data?.title_1}
        </h3>

        <h1 className="lg:text-4xl  md:text-2xl text-xl  text-slate-900 font-bold uppercase">
          {data?.title_2}
        </h1>

        <p className="lg:text-sm text-xs  lg:my-3 my-1">{data?.description}</p>
      </div>
    </div>
  );
};

export default InnovativeSection;
