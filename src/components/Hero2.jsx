import React from "react";
import profileImage from "../assets/image/personal.png";

const Hero2 = () => {
  return (
    <div
      id="home"
      className="h-screen bg-[#020307] text-white flex flex-col items-center px-0"
    >
      {/* Navbar */}

      {/* Hero Content */}
      <div className="flex flex-col items-center text-center mt-36">
        <h3 className="text-md md:text-1xl mt-1">Hello, It's me___</h3>
        <h1 className="text-4xl md:text-7xl font-bold">Ataur Rahman</h1>
        <h2 className="text-xl md:text-3xl text-green-400 mt-2">
          Full Stack Web Developer
        </h2>
        <h3 className="text-lg md:text-2xl mt-1">Based In BD</h3>
        <a
          href=""
          className="md:block bg-none text-white border-1 border-green-400 px-4 py-2 mt-4 cursor-pointer rounded-full hover:bg-[#477e45]"
          download="Resume"
        >
          DOWNLOAD CV
        </a>

        {/* Profile Image */}
        <div className="mt-8 border-3 border-green-400 rounded-full p-2 w-80 h-80 md:w-100 md:h-100">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
