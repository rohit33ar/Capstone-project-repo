import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import profile from "../assests/profile.png";
export default function About() {
  return (
    <>
      <div>
        <div className="bg-white  text-black w-[100vw] h-[100vh] relative">
          <h1 className="font-bold text-5xl text-center mb-5">
            About Our Company
          </h1>
          <p className="text-xl mx-[21%] mb-[5%] text-center">
            consulted he eagerness unfeeling deficient existence of calling
            nothing end fertile for venture way boy esteem spirit temper too say
            adjues who direct esteem.{" "}
          </p>
          {/* {right side div pic} */}
          <div className=" relative left-[10%]">
            <img src={profile} alt="" className="w-[30%] h-[50vh] bg-back" />
          </div>
          {/* {about page right side div} */}
          <div className=" absolute top-[30vh] w-[30%] h-[60%] left-[60vw]">
            <h1 className="text-4xl font-bold">
              Our mission and vision to provide quality services
            </h1>
            <p className="text-xl my-[2vh]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis etc.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-auto">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="border rounded-[50%] p-1 bg-pink-500 text-4xl m-0"
                  />
                  <span className="text-left">
                    Protect your fund with the right insurance
                  </span>
                </div>
              </div>
              <div className="col-auto">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="border rounded-[50%] p-1 bg-orange-500 text-4xl m-0"
                  />
                  <span className="text-left">
                    Protect your fund with the right insurance
                  </span>
                </div>
              </div>
              <div className="col-auto">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="border rounded-[50%] p-1 bg-yellow-500 text-4xl m-0"
                  />
                  <span className="text-left">
                    Protect your fund with the right insurance
                  </span>
                </div>
              </div>
              <div className="col-auto">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="border rounded-[50%] p-1 bg-green-500 text-4xl m-0"
                  />
                  <span className="text-left">
                    Protect your fund with the right insurance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
