import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
    <div className="bg-[#3a3b62] w-full px-[120px]  py-[50px]">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-5">
          <div className="flex gap-5 items-center justify-center h-full ">
            <img
              src="/assets/images/logos/logo-footer.png"
              alt=""
              className="h-[150px]"
            />

            <div className="text-white text-opacity-90 py-2">
              <p className="text-sm">
                Intersys Limited persistently adds value to your projects and
                establishes a digital presence with the integration of
                innovative solutions. We design and build software-integrated
                solutions, including data-driven strategies and UI/UX designs.
              </p>

              <div className="flex items-center gap-2 mt-3">
                <Icon
                  icon="mdi:instagram"
                  className="text-2xl hover:text-opacity-100 cursor-pointer transition-all hover:scale-110"
                />
                <Icon
                  icon="mdi:linkedin"
                  className="text-2xl hover:text-opacity-100 cursor-pointer transition-all hover:scale-110"
                />
                <Icon
                  icon="ic:baseline-facebook"
                  className="text-2xl hover:text-opacity-100 cursor-pointer transition-all hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <h3 className="text-white  font-semibold uppercase text-lg mb-3 ps-2">
            Quick Links
          </h3>
          <ul className="flex flex-col text-white text-sm gap-2">
            <li>
              <a
                href="#"
                className="flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                {" "}
                <Icon
                  icon="eva:arrow-right-fill"
                  className="text-xl mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
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
                  className="text-xl mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
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
                  className="text-xl mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
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
                  className="text-xl mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
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
                  className="text-xl mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
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
                  className="text-xl mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
                />{" "}
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2">
          <h3 className="text-white  font-semibold uppercase text-lg mb-3 ps-2">
            Services
          </h3>
          <ul className="flex flex-col text-white text-sm gap-2">
            <li>
              <a
                href="#"
                className="flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                {" "}
                <Icon
                  icon="eva:arrow-right-fill"
                  className="text-xl mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
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
                  className="text-xl mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
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
                  className="text-xl mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
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
                  className="text-xl mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
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
                  className="text-xl mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
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
                  className="text-xl mr-1 group-hover:translate-x-1 group-hover:text-white transition-all text-[#7d7ec6] "
                />{" "}
                Web Development{" "}
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-3">
          <h3 className="text-white  font-semibold uppercase text-lg mb-3 ps-2">
            Get In Touch
          </h3>
          <ul className="flex flex-col text-white text-sm gap-2">
            <li>
              <a
                href="#"
                className="flex items-center group hover:text-[#7d7ec6] transition-all"
              >
                <Icon
                  icon="ic:baseline-call"
                  className="text-xl mr-2 group-hover:translate-x-1 group-hover:text-white transition-all   "
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
                  className="text-xl mr-2 group-hover:translate-x-1 group-hover:text-white transition-all   "
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
    <div className="bg-[#31315b] w-full h-[50px] px-[120px] text-white flex items-center justify-between">
      <p className="text-sm">Copyright © 2025. Tech HMD  Private Limited.</p>
      <div className="flex gap-3 items-center ">
        <a href="#" className=" text-sm hover:text-slate-400 transition-all">Terms & Condition </a>
        <a href="#" className=" text-sm hover:text-slate-400 transition-all"> Privacy Policy  </a>
        <a href="#" className=" text-sm hover:text-slate-400 transition-all">Refund Policy </a>
      </div>
    </div>
    </>
  );
};

export default Footer
