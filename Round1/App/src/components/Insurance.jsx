import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default function Ins() {
  return (
    <>
      <div className="relative top-[30vh] text-center te">
        <h1 className="font-bold text-5xl text-center text-black block">
          Insurance Policies
        </h1>
        <p className="text-[gray] text-xl  px-[20vw]">
          Consulted he eagerness unfeeling deficient existence of. Calling
          nothing end fertile for venture way boy. Esteem spirit temper too say
          adieus who direct esteem.
        </p>
      </div>
      <div className="grid grid-rows-2 grid-cols-3 gap-4 relative top-[30vh] m-20">
        {/* Row 1, Column 1 */}
        <div className="block">
          <div>
            <FontAwesomeIcon icon={faHouseChimney} className="text-7xl m-5" />
            <span className="text-3xl text-black block font-bold mt-5">
              Home Insurance
            </span>
            <p className="text-xl text-[gray] my-5">
              Consulted he eagerness unfeeling deficient existence of Calling
              nothing end fertile for venture way boy. Esteem spirit temper too
            </p>
            <span className="mt-5 text-xl font-bold">
              Read More
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-2xl font-bold mx-6"
              />
            </span>
          </div>
        </div>
        {/* Row 1, Column 2 */}
        <div className="block">
          <div>
            <FontAwesomeIcon icon={faHouseChimney} className="text-7xl m-5" />
            <span className="text-3xl text-black block font-bold mt-5">
              Home Insurance
            </span>
            <p className="text-xl text-[gray] my-5">
              Consulted he eagerness unfeeling deficient existence of Calling
              nothing end fertile for venture way boy. Esteem spirit temper too
            </p>
            <span className="mt-5 text-xl font-bold">
              Read More
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-2xl font-bold mx-6"
              />
            </span>
          </div>
        </div>
        {/* Row 1, Column 3 */}
        <div className="block">
          <div>
            <FontAwesomeIcon icon={faHouseChimney} className="text-7xl m-5" />
            <span className="text-3xl text-black block font-bold mt-5">
              Home Insurance
            </span>
            <p className="text-xl text-[gray] my-5">
              Consulted he eagerness unfeeling deficient existence of Calling
              nothing end fertile for venture way boy. Esteem spirit temper too
            </p>
            <span className="mt-5 text-xl font-bold">
              Read More
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-2xl font-bold mx-6"
              />
            </span>
          </div>
        </div>
        {/* Row 2, Column 1 */}
        <div className="block">
          <div>
            <FontAwesomeIcon icon={faHouseChimney} className="text-7xl m-5" />
            <span className="text-3xl text-black block font-bold mt-5">
              Home Insurance
            </span>
            <p className="text-xl text-[gray] my-5">
              Consulted he eagerness unfeeling deficient existence of Calling
              nothing end fertile for venture way boy. Esteem spirit temper too
            </p>
            <span className="mt-5 text-xl font-bold">
              Read More
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-2xl font-bold mx-6"
              />
            </span>
          </div>
        </div>
        {/* Row 2, Column 2 */}
        <div className="block">
          <div>
            <FontAwesomeIcon icon={faHouseChimney} className="text-7xl m-5" />
            <span className="text-3xl text-black block font-bold mt-5">
              Home Insurance
            </span>
            <p className="text-xl text-[gray] my-5">
              Consulted he eagerness unfeeling deficient existence of Calling
              nothing end fertile for venture way boy. Esteem spirit temper too
            </p>
            <span className="mt-5 text-xl font-bold">
              Read More
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-2xl font-bold mx-6"
              />
            </span>
          </div>
        </div>
        {/* Row 2, Column 3 */}
        <div className="block">
          <div>
            <FontAwesomeIcon icon={faHouseChimney} className="text-7xl m-5" />
            <span className="text-3xl text-black block font-bold mt-5">
              Home Insurance
            </span>
            <p className="text-xl text-[gray] my-5">
              Consulted he eagerness unfeeling deficient existence of Calling
              nothing end fertile for venture way boy. Esteem spirit temper too
            </p>
            <span className="mt-5 text-xl font-bold">
              Read More
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-2xl font-bold mx-6"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
