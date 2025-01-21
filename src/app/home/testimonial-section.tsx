"use client";
 
import React, { useEffect, useState } from "react";
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getHomeTestimonials } from "@/lib/api/home";
 

const Testimonialsection = () => {

  const [data, setData] = useState<HomeTestimonial[] | null>(null);

  const getTestimonials = async () => {
    const {
      data: { data },
    } = await getHomeTestimonials();

    setData(data);
    console.log(data)
  
  };

  useEffect(() => {
    getTestimonials();
  }, []);


  return (
    <div className="w-full min-h-screen lg:px-[150px] md:px-[80px]  sm:px-[40px] px-[20px]   lg:gap-12 py-[50px] relative">
 
    
      <img src="/assets/images/textures/blue-texture.png"  className='object-cover  w-full h-full absolute left-0 top-0  -z-10' alt="" />
    
      <img src="/assets/images/shapes/testimonial.png" className="mx-auto" alt="" />

      <h2 className="text-slate-900 lg:text-3xl  md:text-2xl sm:text-xl text-lg  text-center uppercase font-semibold mb-1 mt-4">
      Testimonials
      </h2>

      <p className="text-slate-900 md:text-sm text-xs  text-center capitalize max-w-[500px] px-2 mx-auto">
        We are dedicated to guiding you to navigate through the digital realm 
        in order to grow your business from the introduction phase to th .
      </p>
 
      <Carousel className="sm:w-[80%] w-[90%] mx-auto mt-10 outline outline-2 outline-[#6a6ba8] border-2 rounded-xl border-white">
      <CarouselContent>
        {data?.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-8 min-h-[250px] rounded-xl  bg-[#3A3B62] text-white text-center flex flex-col justify-between gap-4 ">
              <p className="text-sm ">{item.title}</p>
              <p className="md:text-sm text-xs ">{item.description}</p>
              <p className="font-semibold max-md:text-sm capitalize">{item.user}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="sm:left-[-40px] left-[-15px] sm:top-[50%] top-[45%]" />
      <CarouselNext className="sm:right-[-40px] right-[-15px] sm:top-[50%] top-[45%]" />
    </Carousel>


      




    </div>
  );
};

export default Testimonialsection;
