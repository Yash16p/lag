import React from 'react';
import { FiDownload } from "react-icons/fi";
import { FaAngleDown } from 'react-icons/fa';
import { CiShare2 } from "react-icons/ci";
import Logo from '../assests/Logomark.png';
import avatar from '../assests/image 3.png';

import settings from '../assests/Icon.png';
import home from '../assests/carbon_home.png';
import avatar2 from '../assests/Inner.png';
import { PiExportLight } from "react-icons/pi";


const Navbar = () => {
  return (
    <nav className="bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 py-2 flex flex-wrap justify-between items-center">
        {/* Left section: Logo and Title */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="h-8 sm:h-9" />

          {/* Title */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <span className="font-bold text-lg sm:text-[31px] text-Routecho">Lagoon</span>
            <span className="font-semibold text-base sm:text-[30px]">Untitled file</span>
          </div>
        </div>

        {/* Right section: Icons */}
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          {/* Avatar button */}
          <button className="flex justify-center items-center border-2 sm:border-4 w-9 sm:w-[43px] h-9 sm:h-[43px] border-green-800 bg-customGreen rounded-full">
            <img src={avatar} className="w-5 sm:w-[25px] h-4 sm:h-[19px]" alt="avatar" />
          </button>

          {/* Export Button (hidden on small screens) */}
          <button className="hidden sm:flex items-center px-4 sm:px-5 py-1.5 sm:py-2.5 bg-[#F5F6F3FA] hover:bg-gray-100 text-[#004838] font-semibold rounded-md">
            <PiExportLight className="mr-1 sm:mr-2 text-lg sm:text-xl text-[#004838]" />
            <span className="hidden sm:inline">Export</span>
            <FaAngleDown className="ml-1 sm:ml-2 text-sm sm:text-lg" />
          </button>

          {/* Share Button */}
          <button className="flex items-center px-4 sm:px-5 py-1.5 sm:py-2.5 bg-[#004838] font-medium rounded-md">
            <CiShare2 className="mr-1 sm:mr-2 text-lg sm:text-xl text-customGreen" />
            <span className="text-customGreen text-sm sm:text-base">Share</span>
            <FaAngleDown className="ml-1 sm:ml-2 text-sm sm:text-md top-8 text-customGreen" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
