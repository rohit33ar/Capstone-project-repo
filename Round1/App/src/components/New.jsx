import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import city from "../assests/city.jpg";
import room from "../assests/room.jpg";
import shield from "../assests/shield.jpg";
import log01 from "../assests/log01.jpg";
import logo2 from "../assests/logo2.jpg";
import logo3 from "../assests/8982.jpg";
import bf7 from "../assests/bf7.jpg";
export default function News() {
  return (
    <>
      <div className="bg-white h-screen w-[100vw] ">
        <div className="w-screen h-screen bg-white text-black flex items-center justify-center">
          <div className="">
            <div className="flex justify-center items-center">
              <FontAwesomeIcon
                icon={faMinus}
                className="text-green-400 text-6xl"
              />
            </div>

            <h1 className="text-5xl font-bold text-center">Recent News</h1>
            <p className="text-xl mt-8 px-[21vw] text-center">
              Consulted he eagerness unfeeling deficient existence of. Calling
              nothing end fertile for venture way boy. Esteem spirit temper too
              say adieus who direct esteem.
            </p>
            <div className="flex mt-10 w-[80vw] h-[50vh] items-center relative left-[10vw]">
              <div className="float-left mr-5">
                <div>
                  <img
                    src={city}
                    alt="City"
                    className="w-[50vw] h-[40vh] rounded"
                  />
                </div>
                <div className="flex">
                  <div>
                    <span>Andrew</span>
                  </div>
                  <div>
                    <span>15</span>
                  </div>
                  <div>
                    <span>30</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold">
                    How to market analysis and predict future growth
                  </h1>
                </div>
              </div>
              <div className="float-right">
                <div>
                  <img
                    src={room}
                    alt="Room"
                    className="w-[50vw] h-[40vh] rounded"
                  />
                </div>
                <div className="flex">
                  <div>
                    <span>Andrew</span>
                  </div>
                  <div>
                    <span>15</span>
                  </div>
                  <div>
                    <span>30</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold">
                    Ranking your website with Google Web Master Method
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90vw] h-[50vh] white border mt-10 flex relative left-[5vw] bg-white">
          <div className="w-[40vw] h-[30vh] float-left">
            <img src={shield} alt="Shield" className="w-[40vw] h-[50vh]" />
          </div>
          <div className="bg-white">
            <div className="float-right w-[40vw] h-[50] relative top-20 left-5 ">
              <h1 className="text-4xl text-black font-bold">
                Call us in any emergency situation. We are active 24/7 to help
                you
              </h1>
              <div className="bg-green-400 w-[15vw] h-[0.3vh] relative top-10">
                {" "}
              </div>
              <h2 className="relative top-20 text-2xl text-black font-semibold">
                Toll-free no: +667 6230991
              </h2>
            </div>
          </div>
        </div>
        <div className="w-[100vw] h-[140vh] relative bg-white top-20">
          <div className="flex justify-center">
            <h1 className="text-5xl text-black font-bold text-center">
              We Love To Work With Our Partners
            </h1>
          </div>
          <div className="grid grid-cols-4">
            <div>
              <img src={log01} alt="Log01" className="w-[30vw] h-[50vh]" />
            </div>
            <div>
              <img src={logo2} alt="Logo2" className="w-[30vw] h-[50vh]" />
            </div>
            <div>
              <img src={logo3} alt="Logo3" className="w-[30vw] h-[50vh]" />
            </div>
            <div>
              <img src={bf7} alt="Bf7" className="w-[30vw] h-[50vh]" />
            </div>
          </div>
          <footer>
            <div className="bg-orange-100 h-[50vh] pt-10">
              <div className="grid grid-cols-4 relative left-28 text-black mt-10">
                <div>
                  <h1 className="font-semibold text-2xl">About</h1>
                  <p className="leading-9 pr-28 text-xl justify-content">
                    We always try to give our best quality guidance for our all
                    volunteers. So they will successfully work together.
                  </p>
                </div>
                <div>
                  <h1 className="font-semibold text-2xl">Insurance Policy</h1>
                  <p className="leading-9 pr-28 text-xl justify-content">
                    Health Insurance Life Insurance Business Insurance Accident
                    Insurance Car Insurance
                  </p>
                </div>
                <div>
                  <h1 className="font-semibold text-2xl">Support</h1>
                  <p className="leading-9 pr-28 text-xl justify-content">
                    Documentation Product Reporting Issue Terms & Conditions
                    Privacy Policy
                  </p>
                </div>
                <div>
                  <h1 className="font-semibold text-2xl">Contact Info</h1>
                  <p className="leading-9 pr-28 text-xl justify-content">
                    4777 Hartland Avenue,
                  </p>
                  <p className="leading-9 pr-28 text-xl justify-content">
                    Neosho, WI 53059
                  </p>
                  <p className="leading-9 pr-28 text-xl justify-content">
                    insurance@gmail.com
                  </p>
                  <p className="leading-9 pr-28 text-xl justify-content">
                    +989-575788889
                  </p>
                </div>
                <span className="relative top-[5vh] text-l left-[30vw] text-center">
                  2020-Lala by Laralink. All Rights Reserved.
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
