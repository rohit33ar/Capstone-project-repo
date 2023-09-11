import React from "react";
export default function Body() {
  return (
    <>
      <div className=" w-[100vw] h-[100vh]">
        <div className="relative">
          <p className=" relative top-[18vh] text-center font-bold text-[5em]">
            Better insurance starts here with best insurance company.
          </p>
          <button className="relative top-[20vh] left-[40vw] py-3 px-5 border  ">
            Learn More
          </button>
          <button className="relative top-[20vh] left-[45vw]  py-3 px-5 border  mb-[17vh]">
            Get Quote
          </button>

          <div className="flex justify-center items-center left-[5vw] m-0 h-screen absolute">
            <div className=" w-[90vw] h-[25vh] border bg-[#445069] pt-9">
              <div className="grid grid-cols-3 p-10 text-center font-bold text-2xl ">
                <div className="">
                  <span className="block">Insurance</span>
                  <span className="text-4xl">20+</span>
                </div>
                <div>
                  <span className="block">Happy Clients</span>
                  <span className="text-4xl">500+</span>
                </div>
                <div>
                  <span className="block">Awards Win</span>
                  <span className="text-4xl">15+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
