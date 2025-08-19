import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import helloLogo from "../assets/image/Logo.png";
import helloLogo2 from "../assets/image/logo_ataur.png";
import helloLogo3 from "../assets/image/ataur.png";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Skills from "./Skills";

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between text-white px-8 md:px-0 py-0 md:py-4 sticky top-0 bg-[#111111] border-b border-gray-700 z-50">
        {/* Logo for desktop */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <a href="#home">
            <img src={helloLogo3} alt="hello" className="h-20 " />
          </a>
        </div>

        {/* Logo for mobile */}
        <div className="md:hidden">
          <img src={helloLogo3} alt="hello" className="h-20" />
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex gap-6 ml-4 text-xl">
          <a href="#home">
            <li className="font-semibold cursor-pointer">Portfolio</li>
          </a>
          <a href="#about">
            <li className="font-semibold cursor-pointer">About Me</li>
          </a>
          <a href="#skills">
            <li className="font-semibold cursor-pointer">Skills</li>
          </a>
          <a href="#contact">
            <li className="font-semibold cursor-pointer">Get In Touch</li>
          </a>
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4 mr-4">
          <a href="https://github.com/Ataur-frontend-developer">
            <FaGithub className="cursor-pointer size-7" />
          </a>
          <FaInstagram className="cursor-pointer size-7" />
          <FaTwitter className="cursor-pointer size-7" />
          <FaLinkedin className="cursor-pointer size-7" />
        </div>

        {/* Toggle Button for Mobile */}
        <div className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-14 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 text-lg z-40">
            <ul className="flex flex-col items-center gap-4">
              <li className="font-semibold cursor-pointer">Portfolio</li>
              <li className="font-semibold cursor-pointer">About Me</li>
              <li className="font-semibold cursor-pointer">Get In Touch</li>
            </ul>
            <div className="flex gap-6">
              <FaGithub />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar2;
