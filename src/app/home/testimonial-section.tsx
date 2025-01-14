import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Testimonialsection = () => {
  return (
    <div className="w-full h-screen px-[120px] py-[50px] relative">

      <img src="/assets/images/shapes/testimonial.png" className="mx-auto" alt="" />

      <h2 className="text-slate-900 text-3xl text-center uppercase font-semibold mb-1 mt-4">
      Testimonials
      </h2>

      <p className="text-slate-900 text-sm text-center capitalize">
        We are dedicated to guiding you to navigate through the digital realm{" "}
        <br />
        in order to grow your business from the introduction phase to th .
      </p>



      <Carousel className="w-[80%] mx-auto mt-10">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-8 min-h-[250px] rounded-xl  bg-[#3A3B62] text-white text-center flex flex-col justify-between">
              <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur dolore accusantium sequi quod consequuntur vero autem, iusto quas tempore! Sed ab, iusto consectetur in incidunt facilis quisquam? Culpa, error neque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum voluptate assumenda necessitatibus odit voluptates inventore labore facilis. Illum, incidunt sint, quia nemo natus quis cumque, explicabo harum hic sunt a.</p>
              <p className="font-semibold">Farhan Ali</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

      




    </div>
  );
};

export default Testimonialsection;
