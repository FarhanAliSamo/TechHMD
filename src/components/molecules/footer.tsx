import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
    <div className="bg-[#3a3b62] w-full lg:px-[150px] md:px-[80px]  md:py-[50px] sm:py-[40px] px-[20px]">
      <div className="grid grid-cols-12 gap-5 gap-y-8 ">
        <div className="lg:col-span-5 col-span-12 ">
          <div className="flex sm:gap-5 gap-2 items-center justify-center max-sm:flex-col max-sm:text-center h-full ">
            <img
              src="/assets/images/logos/logo-footer.png"
              alt=""
              className="lg:h-[150px] md:h-[120px] sm:h-[100px] h-[80px] "
            />

            <div className="text-white text-opacity-90 py-2 ">
              <p className="lg:text-sm text-xs">
                Intersys Limited persistently adds value to your projects and
                establishes a digital presence with the integration of
                innovative solutions. We design and build software-integrated
                solutions, including data-driven strategies and UI/UX designs.
              </p>

              <div className="flex items-center max-sm:justify-center gap-2 mt-3">
                <Icon
                  icon="mdi:instagram"
                  className="lg:text-2xl md:text-xl text-lg  hover:text-opacity-100 cursor-pointer transition-all hover:scale-110"
                />
                <Icon
                  icon="mdi:linkedin"
                  className="lg:text-2xl md:text-xl text-lg  hover:text-opacity-100 cursor-pointer transition-all hover:scale-110"
                />
                <Icon
                  icon="ic:baseline-facebook"
                  className="lg:text-2xl md:text-xl text-lg  hover:text-opacity-100 cursor-pointer transition-all hover:scale-110"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="lg:col-span-2 md:col-span-4 col-span-6">
          <h3 className="text-white  font-semibold uppercase lg:text-lg md:text-base text-sm sm:mb-3 mb-2 ps-2">
            Quick Links
          </h3>
          <ul className="flex flex-col text-white lg:text-sm text-xs  gap-2">
            <li>
              <a
                href="#"
                className="flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                {" "}
                <Icon
                  icon="eva:arrow-right-fill"
                  className="lg:text-xl md:text-lg text-base mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
                />{" "}
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                {" "}
                <Icon
                  icon="eva:arrow-right-fill"
                  className="lg:text-xl md:text-lg text-base mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
                />{" "}
                About us{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                {" "}
                <Icon
                  icon="eva:arrow-right-fill"
                  className="lg:text-xl md:text-lg text-base mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
                />{" "}
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                {" "}
                <Icon
                  icon="eva:arrow-right-fill"
                  className="lg:text-xl md:text-lg text-base mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
                />{" "}
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                {" "}
                <Icon
                  icon="eva:arrow-right-fill"
                  className="lg:text-xl md:text-lg text-base mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
                />{" "}
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                {" "}
                <Icon
                  icon="eva:arrow-right-fill"
                  className="lg:text-xl md:text-lg text-base mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
                />{" "}
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2 md:col-span-4 col-span-6">
          <h3 className="text-white  font-semibold uppercase lg:text-lg md:text-base text-sm sm:mb-3 mb-2 ps-2">
            Services
          </h3>
          <ul className="flex flex-col text-white lg:text-sm text-xs gap-2">
            <li>
              <a
                href="#"
                className="flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                {" "}
                <Icon
                  icon="eva:arrow-right-fill"
                  className="lg:text-xl md:text-lg text-base mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
                />{" "}
                Artificial Intelligence{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                {" "}
                <Icon
                  icon="eva:arrow-right-fill"
                  className="lg:text-xl md:text-lg text-base mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
                />{" "}
                Machine Learning{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                {" "}
                <Icon
                  icon="eva:arrow-right-fill"
                  className="lg:text-xl md:text-lg text-base mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
                />{" "}
                Graphic Design
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                {" "}
                <Icon
                  icon="eva:arrow-right-fill"
                  className="lg:text-xl md:text-lg text-base mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
                />{" "}
                Digital Marketing{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                {" "}
                <Icon
                  icon="eva:arrow-right-fill"
                  className="lg:text-xl md:text-lg text-base mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
                />{" "}
                App Development{" "}
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                {" "}
                <Icon
                  icon="eva:arrow-right-fill"
                  className="lg:text-xl md:text-lg text-base mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
                />{" "}
                Web Development{" "}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <h3 className="text-white  font-semibold uppercase lg:text-lg md:text-base text-sm sm:mb-3 mb-2 ps-2">
            Get In Touch
          </h3>
          <ul className="flex flex-col text-white lg:text-sm text-xs gap-2">
            <li>
              <a
                href="#"
                className="flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                <Icon
                  icon="ic:baseline-call"
                  className="lg:text-xl text-lg mr-2 group-hover:translate-x-1 group-hover:text-white transition-all   "
                />
                +92 3131112456
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                <Icon
                  icon="material-symbols:mail"
                  className="lg:text-xl text-lg mr-2 group-hover:translate-x-1 group-hover:text-white transition-all   "
                />
                info@techhmd.com
              </a>
            </li>
            <li>
              <h4 className=" font-semibold text-white my-3 flex items-center gap-2 uppercase">
                <Icon
                  icon="streamline:location-pin-3-solid"
                  className="text-xl "
                />{" "}
                Location
              </h4>
              <a
                href="#"
                className="text-xs flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                Plot D-18, The Residence, Block 08, Road, Clifton, Karachi,
                Pakistan. 34c Khayaban-e-SHAMSHER, Commercial DHA, Karachi,
                Pakistan.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-[#31315b] w-full md:h-[50px] max-md:py-[15px] max-md:pt-[20px]  lg:px-[150px] md:px-[80px]     text-white flex items-center md:justify-between justify-center gap-1.5 max-md:flex-col">
      <p className="lg:text-sm text-xs">Copyright © 2025. Tech HMD  Private Limited.</p>
      <div className="flex sm:gap-3 gap-2 items-center ">
        <a href="#" className=" lg:text-sm text-xs hover:text-slate-400 transition-all">Terms & Condition </a>
        <a href="#" className=" lg:text-sm text-xs hover:text-slate-400 transition-all"> Privacy Policy  </a>
        <a href="#" className=" lg:text-sm text-xs hover:text-slate-400 transition-all">Refund Policy </a>
      </div>
    </div>
    </>
  );
};

export default Footer
