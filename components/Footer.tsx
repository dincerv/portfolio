import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0c13] text-white py-10">
      <div className="container mx-auto text-center">
        {/* Logo and Introduction */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-yellow-400">DV Portfolio</h2>
          <p className="mt-2 text-sm text-gray-400">
            A creative web developer crafting innovative solutions for the
            digital world.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/dincer-velioglu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition duration-300"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://github.com/dincerv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.instagram.com/dincervelioglu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition duration-300"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 mb-6 text-sm text-gray-400">
          <a
            href="#hero"
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-yellow-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-yellow-400 transition duration-300"
          >
            Services
          </a>
          <a
            href="#skills"
            className="hover:text-yellow-400 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-400 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} DV Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
