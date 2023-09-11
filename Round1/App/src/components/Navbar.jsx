import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex justify-between items-center">
          <div>
            {/* <FontAwesomeIcon icon={faSquareRing} /> */}
            <span className="text-4xl text-[#213555] font-bold">Insurance</span>
          </div>
          <div className="text-right">
            <ul className="inline-flex gap-8 text-[#213555]">
              <li>
                HOME <FontAwesomeIcon icon={faSortDown} />
              </li>
              <li>
                PAGES <FontAwesomeIcon icon={faSortDown} />
              </li>
              <li>
                PORTFOLIO <FontAwesomeIcon icon={faSortDown} />
              </li>
              <li>
                BLOG <FontAwesomeIcon icon={faSortDown} />
              </li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
