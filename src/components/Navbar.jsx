import React, { useState } from 'react';
import { FiDownload } from "react-icons/fi";
import { FaAngleDown } from 'react-icons/fa';
import { CiShare2 } from "react-icons/ci";
import { PiExportLight } from "react-icons/pi";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Left section: Logo and Title */}
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <img src="/api/placeholder/36/36" alt="Logo" className="h-9 w-9" />
            
            {/* Title */}
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="font-bold text-2xl sm:text-3xl text-[#004838]">Lagoon</span>
              <span className="font-semibold text-lg sm:text-xl ml-0 sm:ml-4 text-gray-600">Untitled file</span>
            </div>
          </div>
          
          {/* Right section: Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex justify-center items-center border-2 w-10 h-10 border-green-800 bg-[#E8F0EE] rounded-full">
              <img src="/api/placeholder/25/25" className="w-6 h-6" alt="avatar" />
            </button>
            
            {/* Export Button */}
            <button className="flex items-center px-4 py-2 bg-[#F5F6F3] hover:bg-gray-100 text-[#004838] font-semibold rounded-md">
              <PiExportLight className="mr-2 text-xl" />
              Export
              <FaAngleDown className="ml-2 text-sm" />
            </button>
            
            {/* Share Button */}
            <button className="flex items-center px-4 py-2 bg-[#004838] text-[#E8F0EE] font-medium rounded-md">
              <CiShare2 className="mr-2 text-xl" />
              <span>Share</span>
              <FaAngleDown className="ml-2 text-sm" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <button className="flex items-center w-full px-4 py-2 text-left text-[#004838] hover:bg-gray-100 rounded-md">
              <PiExportLight className="mr-2 text-xl" />
              Export
            </button>
            <button className="flex items-center w-full px-4 py-2 mt-2 text-left text-[#004838] hover:bg-gray-100 rounded-md">
              <CiShare2 className="mr-2 text-xl" />
              Share
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;