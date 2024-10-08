import React from 'react';
import { FiDownload } from "react-icons/fi";
import { FaAngleDown } from 'react-icons/fa';
import { CiShare2 } from "react-icons/ci";
import Logo from '../assests/Logomark.png';
import avatar from '../assests/image 3.png';

import settings from '../assests/Icon.png';
// import plus from '../assests/PLUS.png';
import home from '../assests/carbon_home.png';
import avatar2 from '../assests/Inner.png';
import { PiExportLight } from "react-icons/pi";


const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left section: Logo and Title */}
        <div className="relative left-0 flex items-center space-x-2 sm:space-x-4"> {/* Adjusted space for small and larger screens */}
          {/* Logo */}
          <img src={Logo} alt="Logo" className="h-9" />
          
          {/* Title */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <span className=" font-bold text-[31px] text-Routecho">Lagoon</span>
            <span className='font-semibold text-[30px]'>Untitled file</span>
          </div>
        </div>

        {/* Right section: Icons */}
        <div className="flex flex-wrap items-center space-x-4 text-xl mt-4 sm:mt-0">
        
          <button className='flex justify-center items-center border-4 w-[43px] h-[43px] border-green-800 bg-customGreen rounded-full'>
            <img src={avatar} className='w-[25px] h-[19px]' alt="avatar" />
          </button>

          {/* Export Button (hidden on small screens) */}
          <button className="hidden sm:flex items-center px-4 py-2 bg-[#F5F6F3FA] hover:bg-gray-200 text-green-700 font-medium rounded-md">
          <PiExportLight  className="mr-2 text-sm" />
            Export
            <FaAngleDown className="ml-2 text-sm" />
          </button>

          {/* Share Button */}
          <button className="flex items-center px-4 py-2 bg-green-800 text-green-700 font-medium rounded-md">
            <CiShare2 className="mr-2 text-lg sm:text-xl text-customGreen" />
            <span className='text-customGreen text-sm sm:text-base'>Share</span>
            <FaAngleDown className="ml-2 text-sm sm:text-md top-8 text-customGreen" />
          </button>

          {/* Additional Avatar */}
          {/* <img src={avatar2} className='text-xl w-8 sm:w-auto' alt="avatar2" /> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
