import React from "react";

const InnovativeSection = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen relative w-full px-[150px] gap-12 items-center justify-center py-16 mb-10">
      <img
        src="/assets/images/shapes/diamond_shape.png"
        alt=""
        className="w-[150px] absolute -top-10 right-5"
      />

      <div className="col-span-6">
        <div className="grid grid-cols-12 gap-4">


            <div className="col-span-6 flex flex-col gap-4">

            <div className=" flex flex-col items-center justify-center gap-2 border-2 border-slate-800 py-8 bg-[#3A3B62] text-center px-5 rounded-lg transition-all hover:bg-[#323359] cursor-pointer shadow-md shadow-600 hover:shadow-md hover:shadow-slate-600">
                <img
                src="/assets/images/icons/integration.png"
                className="mb-2"
                alt=""
                />
                <h3 className="text-base font-md uppercase text-white">
                Integrity
                </h3>
                <p className="text-xs text-white">
                We adhere to the code of truthfulnessand honesty in order to
                ensure consistency in our values.
                </p>
            </div>

            <div className=" flex flex-col items-center justify-center gap-2 border-2 border-slate-800 py-8 bg-[#3A3B62] text-center px-5 rounded-lg transition-all hover:bg-[#323359] cursor-pointer shadow-md shadow-600 hover:shadow-md hover:shadow-slate-600">
                <img
                src="/assets/images/icons/dedication.png"
                className="mb-2"
                alt=""
                />
                <h3 className="text-base font-md uppercase text-white">
                Dedication
                </h3>
                <p className="text-xs text-white">
                We adhere to the code of truthfulnessand honesty in order to
                ensure consistency in our values.
                </p>
            </div>

            </div>

            <div className="col-span-6 flex flex-col gap-4 relative top-10">

          <div className=" flex flex-col items-center justify-center gap-2 border-2 border-slate-800 py-8 bg-[#3A3B62] text-center px-5 rounded-lg transition-all hover:bg-[#323359] cursor-pointer shadow-md shadow-600 hover:shadow-md hover:shadow-slate-600">
            <img
              src="/assets/images/icons/collaboration.png"
              className="mb-2"
              alt=""
            />
            <h3 className="text-base font-md uppercase text-white">
              Collaboration
            </h3>
            <p className="text-xs text-white">
              We adhere to the code of truthfulnessand honesty in order to
              ensure consistency in our values.
            </p>
          </div>

          <div className=" flex flex-col items-center justify-center gap-2 border-2 border-slate-800 py-8 bg-[#3A3B62] text-center px-5 rounded-lg transition-all hover:bg-[#323359] cursor-pointer shadow-md shadow-600 hover:shadow-md hover:shadow-slate-600">
            <img
              src="/assets/images/icons/innovation.png"
              className="mb-2"
              alt=""
            />
            <h3 className="text-base font-md uppercase text-white">
              Innovation
            </h3>
            <p className="text-xs text-white">
              We adhere to the code of truthfulnessand honesty in order to
              ensure consistency in our values.
            </p>
          </div>

            </div>

        </div>
      </div>

      <div className="col-span-6">
        <h3 className="mb-3 text-2xl">Optimize Your Operations</h3>
        <h1 className="text-4xl text-slate-900 font-bold uppercase">
          With our innovative digital solutions
        </h1>

        <p className="text-sm my-3">
          We don’t just sell software solutions, but we build your enterprise
          into a success through our collective experience.
        </p>
      </div>
    </div>
  );
};

export default InnovativeSection;
