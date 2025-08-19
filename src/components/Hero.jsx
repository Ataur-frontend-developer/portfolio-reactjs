import React from "react";
import { Download } from "lucide-react";
import myImage from "../assets/image/personal.png";

const Hero = () => {
  return (
    <>
      <section
        id="about"
        className="bg-[#004d40] h-screen text-white px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-center gap-30"
      >
        <div className="max-w-lg">
          <h2 className="text-xl md:text-2xl tracking-widest">About me_</h2>
          <h1 className="text-4xl md:text-5xl font-bold my-2">
            Full Stack Web Developer
          </h1>
          <p className="text-sm md:text-base text-[#cfd8dc] mb-6">
            I am a passionate and dedicated frontend web developer who loves
            building responsive and user-friendly websites using modern tools
            and technologies. I’m always eager to learn new things and
            continuously improve my skills with real-world projects. My goal is
            to become a full-stack developer and contribute to impactful digital
            solutions.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800">
              START CONSULTING
            </button>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              <span className="text-sm">Lorem ipsum dolor sit</span>
            </span>
          </div>
        </div>

        <div className="relative mt-10 md:mt-0">
          <div className="w-80 h-80 md:w-100 md:h-100 rounded-full overflow-hidden border-4 border-white">
            <img
              src={myImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-6 bg-white text-black px-4 py-2 rounded-xl text-center shadow-md">
            <div className="text-xl font-bold">Ataur</div>
            <div className="text-xs">Full stack web developer</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
