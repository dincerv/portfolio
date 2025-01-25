import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavSticky(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stickyStyle = navSticky ? "bg-[#212428] shadow-gray-900 shadow-sm" : "";

  return (
    <div
      className={`fixed w-[100%] ${stickyStyle} transition-all duration-300 z-[1000]`}
    >
      <div className="flex items-center h-[12vh] justify-between w-[90%] mx-auto">
        {/* Logo */}
        <div className="font-logo text-white text-[18px] flex items-center">
          <span className="text-[30px] md:text-[40px] text-yellow-400">DV</span>
          <span className="ml-2 md:ml-4">Portfolio</span>
        </div>
        {/* Nav Links */}
        <ul className="md:flex hidden items-center space-x-8">
          <li>
            <a className="nav__link" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="nav__link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav__link" href="#services">
              Expertise
            </a>
          </li>
          <li>
            <a className="nav__link" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="nav__link" href="#research">
              Research
            </a>
          </li>
          <li>
            <a className="nav__link" href="#photography">
              Photography
            </a>
          </li>
          <li>
            <a className="nav__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        {/* Hamburger Icon for Mobile */}
        <Bars3CenterLeftIcon
          onClick={openNav}
          className="w-[2.3rem] md:hidden h-[2.3rem] text-white cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Nav;
