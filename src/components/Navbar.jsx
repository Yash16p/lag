import React from 'react';
import { FiDownload } from "react-icons/fi";
import { FaAngleDown } from 'react-icons/fa';
import { CiShare2 } from "react-icons/ci";
import Logo from '../assests/Logomark.png';
import avatar from '../assests/image 4.png';
import settings from '../assests/Icon.png';
import plus from '../assests/fluent-mdl2_add-to.png';
import home from '../assests/carbon_home.png';
import avatar2 from '../assests/Inner.png';

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left section: Logo and Title */}
        <div className="flex items-center space-x-2"> {/* Adjusted space-x */}
          {/* Logo */}
          <img src={Logo} alt="Logo" className="h-8" /> {/* Removed margin-right */}
          
          {/* Title */}
          <span className="font-bold text-xl text-green-800">Lagoon</span>
          <span className='font-semibold text-lg ml-4'>Untitled file</span> {/* Added margin-left */}
        </div>

        {/* Right section: Icons */}
        <div className="flex items-center space-x-4 text-xl">
          {/* Home Icon */}
          <img src={home} className='text-xl' alt="home" />
          
          {/* Plus Icon */}
          <img src={plus} className='text-xl' alt="plus" />

          {/* Settings Icon */}
          <img src={settings} className='text-xl' alt="settings" />
          
          {/* Profile Avatar */}
          <button className='rounded border-2 border-green-800 bg-customGreen'>
            <img src={avatar} className='text-lg' alt="avatar" />
          </button>

          {/* Export Button */}
          <button className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-green-700 font-medium rounded-md">
            <FiDownload className="mr-2 text-xl" />
            Export
            <FaAngleDown className="ml-2 text-sm" />
          </button>

          {/* Share Button */}
          <button className="flex items-center px-4 py-2 bg-green-800 hover:bg-gray-200 text-green-700 font-medium rounded-md">
            <CiShare2 className="mr-2 text-xl text-customGreen" />
            <span className='text-customGreen'>Share</span>
            <FaAngleDown className="ml-2 text-md top-8 text-customGreen" />
          </button>

          {/* Additional Avatar */}
          <img src={avatar2} className='text-xl' alt="avatar2" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
