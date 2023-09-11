import React from "react";

export default function Form() {
  return (
    <>
      <div className="w-screen h-auto bg-white flex justify-center">
        <div className="bg-[blue] w-[85vw] h-[50vh] flex relative p-10">
          <div className="w-[38vw] h-[30vh] p-1 flex flex-col justify-center">
            <h1 className="text-white text-left font-bold text-5xl relative top-10">
              Get an Insurance quote to get started. Just fill up the simple
              form.
            </h1>
          </div>
          <div className="w-[40vw] h-[30vh] flex relative left-7vw] top-[8vh]">
            <div className="grid grid-rows-3 gap-5">
              <div className="flex  ">
                <div>
                  <input
                    type="name"
                    placeholder="Full Name"
                    className="h-[7vh] w-[18vw] border-none rounded-l"
                  />
                </div>
                <div className="relative left-5">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-[7vh] w-[18vw] border-none rounded-l"
                  />
                </div>
              </div>
              <div className="flex  ">
                <div>
                  <input
                    type="name"
                    placeholder="Full Name"
                    className="h-[7vh] w-[18vw] border-none rounded-l"
                  />
                </div>
                <div className="relative left-5">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-[7vh] w-[18vw] border-none rounded-l"
                  />
                </div>
              </div>

              <div>
                <input
                  type="submit"
                  id="bt"
                  className="h-[7vh] w-[37.7vw] border-none rounded-l bg-green-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
