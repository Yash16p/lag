import React from 'react';
import { FiDownload } from "react-icons/fi";
import { FaAngleDown } from 'react-icons/fa';
import { CiShare2 } from "react-icons/ci";
import Logo from '../assests/Logomark.png';
import avatar from '../assests/image 4.png';
import settings from '../assests/Icon.png';
// import plus from '../assests/PLUS.png';
import home from '../assests/carbon_home.png';
import avatar2 from '../assests/Inner.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center">
        {/* Left section: Logo and Title */}
        <div className="relative -left-10 flex items-center space-x-2 sm:space-x-4"> {/* Adjusted space for small and larger screens */}
          {/* Logo */}
          <img src={Logo} alt="Logo" className="h-8" />
          
          {/* Title */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <span className=" font-bold text-lg sm:text-xl text-green-800">Lagoon</span>
            <span className='font-semibold text-base sm:text-lg'>Untitled file</span>
          </div>
        </div>

        {/* Right section: Icons */}
        <div className="flex flex-wrap items-center space-x-4 text-xl mt-4 sm:mt-0">
          {/* Home Icon */}
          <img src={home} className='text-xl w-6 sm:w-auto' alt="home" />
          
          {/* Plus Icon */}
          {/* <img src={plus} className='text-xl w-6 sm:w-auto' alt="plus" /> */}

          {/* Settings Icon */}
          <img src={settings} className='text-xl w-6 sm:w-auto' alt="settings" />
          
          {/* Profile Avatar */}
          <button className='rounded border-2 border-green-800 bg-customGreen'>
            <img src={avatar} className='text-lg w-8 sm:w-auto' alt="avatar" />
          </button>

          {/* Export Button (hidden on small screens) */}
          <button className="hidden sm:flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 hover:bg-gray-200 text-green-700 font-medium rounded-md">
            <FiDownload className="mr-2 text-lg sm:text-xl" />
            Export
            <FaAngleDown className="ml-2 text-sm" />
          </button>

          {/* Share Button */}
          <button className="flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-green-800 hover:bg-gray-200 text-green-700 font-medium rounded-md">
            <CiShare2 className="mr-2 text-lg sm:text-xl text-customGreen" />
            <span className='text-customGreen text-sm sm:text-base'>Share</span>
            <FaAngleDown className="ml-2 text-sm sm:text-md top-8 text-customGreen" />
          </button>

          {/* Additional Avatar */}
          <img src={avatar2} className='text-xl w-8 sm:w-auto' alt="avatar2" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
