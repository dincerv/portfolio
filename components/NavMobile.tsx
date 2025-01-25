import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const NavMobile = ({ closeNav, showNav }: Props) => {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay Background */}
      <div
        className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}
      ></div>

      {/* Menu Content */}
      <ul
        className={`text-white ${navOpenStyle} fixed flex items-center flex-col justify-center h-[100%] transform transition-all duration-300 delay-300 w-[60%] bg-gray-700 space-y-14 z-[10006]`}
      >
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            href="#hero"
            onClick={closeNav}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            href="#about"
            onClick={closeNav}
          >
            About
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            href="#services"
            onClick={closeNav}
          >
            Expertise
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            href="#skills"
            onClick={closeNav}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            href="#research"
            onClick={closeNav}
          >
            Research
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            href="#photography"
            onClick={closeNav}
          >
            Photography
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            href="#contact"
            onClick={closeNav}
          >
            Contact
          </a>
        </li>
        <XMarkIcon
          onClick={closeNav}
          className="absolute top-4 right-4 w-[2.2rem] text-white cursor-pointer"
        />
      </ul>
    </div>
  );
};

export default NavMobile;
