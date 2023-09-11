import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Favportrait from "../assests/Favportrait.jpg";
import pic from "../assests/5230311.jpg";
import portraitMale from "../assests/portraitFemale.jpg";
import portraitFemale from "../assests/portraitMale.jpg";
import {
  faMinus,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Faq() {
  return (
    <>
      <div>
        <div className="relative w-[100vw] h-[120vh] bg-white ">
          <div className="bg-[blue] w-[90vw] h-[55vh] inline-block flex-col items-center absolute left-[5%]">
            <div className="relative mt-[8vh]">
              <div className="flex justify-center items-center rounded-full ">
                <img
                  src={portraitMale}
                  alt=""
                  className="rounded-full w-20 h-20 my-2 absolute left-[42%] z-[0.5]"
                />
                <div className="z-40">
                  <img
                    src={Favportrait}
                    alt=""
                    className="rounded-full w-24 h-24 my-2"
                  />
                </div>
                <img
                  src={portraitFemale}
                  alt=""
                  className="rounded-full w-20 h-20 my-2 absolute left-[52%] z-0"
                />
              </div>
              <div className="relative flex mt-6">
                <div className="rounded-full bg-green-400 h-14 w-14 absolute left-3 flex justify-center items-center">
                  <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <p className="px-20 text-center text-xl">
                  Traveling is the art of collecting moments from around the
                  world, weaving them into the tapestry of our lives. It's the
                  melody of discovery, the dance of adventure, and the poetry of
                  the unknown. In each journey, we find beauty, purpose, and a
                  deeper connection to the world. Travel is the canvas upon
                  which we paint the masterpiece of our existence
                </p>
                <div className="rounded-full bg-green-400 h-14 w-14 absolute right-3 flex justify-center items-center">
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
              <div className="text-center mt-6">
                <h1 className="text-3xl font-bold ">Luis Martina</h1>
                <h4 className="text-xl mt-1">Chairman of Ultra Tech</h4>
              </div>
            </div>
          </div>
          <div className=" bg-white text-black w-[100vw] h-auto absolute top-[56vh]">
            <div className="justify-content">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faMinus}
                  className=" text-green-400 text-center text-6xl"
                />

                <h1 className="text-4xl font-bold mb-2">
                  Freequently Ask Questions
                </h1>
                <p className="text-xl px-64">
                  Consulted he eagerness unfeeling deficient existence of
                  Calling nothing end fertile for venture way boy. Esteem spirit
                  temper too say adieus who direct esteem
                </p>
              </div>
              <div className="flex">
                <div className="flex-left w-[45%] m-16">
                  <ul>
                    <li>
                      <h4 className="font-bold text-2xl mr-20 inline-block">
                        How many insurance Policy do you provide ?
                      </h4>
                      <FontAwesomeIcon icon={faAngleUp} />
                      <p className="mt-7">
                        We denounce with righteous indignation and dislike men
                        who are so beguiled and demoralized by the charms of
                        pleasure of the moment, so blinded by desire,that they
                        cannot foresee the pain and trouble that are bound to
                        ensue; end equal
                      </p>
                    </li>
                    <br />
                    <li>
                      <h4 className="font-bold text-2xl mr-32 inline-block">
                        When is it time to update my coverage ?
                      </h4>
                      <FontAwesomeIcon icon={faAngleUp} className="ml-[1%]" />
                    </li>
                    <br />
                    <li>
                      <h4 className="font-bold text-2xl mr-28 inline-block">
                        How to payment for monthly instalement ?
                      </h4>
                      <FontAwesomeIcon icon={faAngleUp} className="ml-[-1%]" />
                    </li>
                    <br />
                    <li>
                      <h4 className="font-bold text-2xl mr-36 inline-block">
                        How can i contact agent for any query?
                      </h4>
                      <FontAwesomeIcon icon={faAngleUp} />
                    </li>
                    <br />
                    <li>
                      <h4 className="font-bold text-2xl mr-36 inline-block">
                        What is the security for any insurance?
                      </h4>
                      <FontAwesomeIcon icon={faAngleUp} />
                    </li>
                  </ul>
                </div>
                <div className="flex-right">
                  <div className="mt-1">
                    <img src={pic} alt="" className="w-[40vw] h-[70vh]"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
