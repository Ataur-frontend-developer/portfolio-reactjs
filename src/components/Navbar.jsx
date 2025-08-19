import React from 'react';
import { Menu, X } from "lucide-react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


const Navbar = () => {

    const [open, setOpen] = React.useState(false);
    return (
    <nav className="bg-[#004d40] text-white px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold">H<span className="text-[#cfd8dc]">M</span></div>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </div>
      <ul className={`
        md:flex md:items-center md:gap-6 absolute md:static top-[70px] left-0 w-full md:w-auto bg-[#004d40] transition-all duration-300 z-10 ${open ? 'block' : 'hidden'}
      `}>
        <li className="px-4 py-2 hover:text-[#80cbc4]">Home</li>
        <li className="px-4 py-2 hover:text-[#80cbc4]">About</li>
        <li className="px-4 py-2 hover:text-[#80cbc4]">Service</li>
        <li className="px-4 py-2 hover:text-[#80cbc4]">Portfolio</li>
        <li className="px-4 py-2 hover:text-[#80cbc4]">Blog</li>
        <li className="px-4 py-2 hover:text-[#80cbc4]">Contact</li>
      </ul>
      <button className="hidden md:block bg-white text-[#004d40] px-4 py-2 rounded-full hover:bg-[#80cbc4]">
        DOWNLOAD CV
      </button>
    </nav>
    );
};

export default Navbar;