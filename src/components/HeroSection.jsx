import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoPricetagOutline } from 'react-icons/io5';
import { GoMortarBoard } from 'react-icons/go';
import {
  MdOutlineShoppingBag, MdPeople, MdOutlineArrowDropUp, MdOutlineArrowDropDown, MdAssignment,
  MdDescription, MdFilterList, MdArrowBackIosNew, MdArrowForwardIos
} from 'react-icons/md';

import { FiPhone, FiMail, FiFileText, FiMessageSquare, FiX } from "react-icons/fi";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineDown } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { data } from '../data'
import { TbCheckbox, TbChevronDown } from "react-icons/tb";


function HeroSection() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isOpenWE, setIsOpenWE] = useState(false);
  const [isOpenSS, setIsOpenSS] = useState(false);
  const [isOpenOA, setIsOpenOA] = useState(false);
  const [isOpenSA, setIsOpenSA] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [statusDropdownIndex, setStatusDropdownIndex] = useState(null);
  const [dataState, setDataState] = useState(data); // To hold dynamic status
  const [notes, setNotes] = useState(""); // State to hold the note content (empty by default)
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [noteContent, setNoteContent] = useState(""); // Input field state
  const [errorMessage, setErrorMessage] = useState(""); // Error message for word limit
  const charLimit = 50; // Define the character limit
  const [showPopupNotes, setShowPopupNotes] = useState(false);
  const preSavedNote = "Design changes have been made";


  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const toggleDropdownWE = () => setIsOpenWE(!isOpenWE);
  const toggleDropdownSS = () => setIsOpenSS(!isOpenSS);
  const toggleDropdownOA = () => setIsOpenOA(!isOpenOA);
  const toggleDropdownSA = () => setIsOpenSA(!isOpenSA);


  const handleStatusChange = (index, newStatus) => {
    const togglePopupNotes = () => {
      setShowPopupNotes(!showPopupNotes);
    };
    const newData = [...dataState];
    newData[index].status = newStatus;

    switch (newStatus) {
      case "Shortlisted":
        newData[index].statusColor = "text-green-500";
        break;
      case "Waitlisted":
        newData[index].statusColor = "text-yellow-500";
        break;
      case "Rejected":
        newData[index].statusColor = "text-red-500";
        break;
      default:
        newData[index].statusColor = "text-gray-500";
    }
    setDataState(newData);
    setStatusDropdownIndex(null); // Close dropdown
  };


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle file submission (optional)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log('File uploaded:', selectedFile);
    }
  };

  // Function to toggle the popup visibility
  const togglePopupNotes = () => {
    setShowPopup(!showPopup);
  };

  const [popupIndex, setPopupIndex] = useState(null); // Tracks which popup is open

  const togglePopup = (index) => {
    setPopupIndex(popupIndex === index ? null : index); // Toggle the popup for each row
  };


  const [isOpen, setIsOpen] = useState(false);
  const [currentDropdown, setCurrentDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setCurrentDropdown(currentDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className='flex mt-9 overflow-x-auto w-full'>
      {/* left panel */}

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className='w-[30%] min-h-screen'>
          <div className='p-4 w-80 bg-white shadow-md border-t-1 border-gray-400'>
            {/* Spikes Section */}
            <div className='mb-4'>
              <div className='flex items-center'>
                <IoPricetagOutline className='text-lg text-green-700' />
                <h2 className='text-lg font-md text-green-700 ml-2'>Spikes</h2>
              </div>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Add spike'
                  className='mt-2 p-2 pl-10 w-full border border-gray-300 rounded-md'
                />
                <FiSearch className='absolute inset-y-0 left-3 my-auto text-gray-400 top-2' />
              </div>
              <div className='mt-4 flex gap-x-7'>
                <label className='flex items-center text-green-700'>
                  <input type='checkbox' className='mr-2 text-green-700' />
                  B-Tech
                </label>
                <label className='flex items-center text-green-700'>
                  <input type='checkbox' className='mr-2 text-green-700' />
                  3-4 Yrs
                </label>
              </div>
            </div>

            <hr />

            {/* Educational Qualification */}
            <div className='mb-4 p-2'>
              <div className='flex items-center justify-between cursor-pointer' onClick={toggleDropdownWE}>
                <div className='flex items-center'>
                  <GoMortarBoard className='text-lg text-green-700' />
                  <h2 className='text-lg font-md text-green-700 ml-2'>Educational Qualification</h2>
                </div>
                <span>{isOpenWE ? <MdOutlineArrowDropUp className='text-lg text-green-700' /> : <MdOutlineArrowDropDown className='text-lg text-green-700' />}</span>
              </div>
              {isOpenWE && (
                <div className='mt-2 p-2 w-full border border-gray-300 rounded-md'>
                  <select className='p-2 w-full border border-gray-300 rounded-md'>
                    <option value='bachelor'>Bachelor's Degree</option>
                    <option value='master'>Master's Degree</option>
                    <option value='phd'>PhD</option>
                  </select>
                </div>
              )}
            </div>

            <hr />

            {/* Work Experience */}
            <div className='mb-4'>
              <div className='flex items-center cursor-pointer' onClick={toggleDropdownWE}>
                <MdOutlineShoppingBag className='text-lg text-green-700 mt-2' />
                <h2 className='text-lg font-md ml-3 mt-2 text-green-700 flex-1'>Work Experience</h2>
                {isOpenWE ? <MdOutlineArrowDropUp className='text-lg text-green-700' /> : <MdOutlineArrowDropDown className='text-lg text-green-700' />}
              </div>
              {isOpenWE && (
                <div className='mt-2'>
                  <div className='mb-4'>
                    <div className='flex justify-between'>
                      <span>0 Yrs</span>
                      <span>20 Yrs</span>
                    </div>
                    <input type='range' min='0' max='20' className='w-full mt-2 text-green-700' />
                    <input
                      type='text'
                      placeholder='Job Role'
                      className='mt-2 p-2 w-full border border-gray-300 rounded-md'
                    />
                  </div>
                  <div className='mb-4'>
                    <h2 className='text-lg font-md text-green-700'>Company Tier</h2>
                    <label className='flex items-center'>
                      <input type='radio' name='tier' className='mr-2' /> Tier 1
                    </label>
                    <label className='flex items-center'>
                      <input type='radio' name='tier' className='mr-2' /> Tier 2
                    </label>
                    <label className='flex items-center'>
                      <input type='radio' name='tier' className='mr-2' /> Tier 3
                    </label>
                  </div>
                  <div className='mb-4'>
                    <h2 className='text-lg font-md text-green-700'>Employee Stickiness</h2>
                    <input type='checkbox' className='mr-2' /> Must have
                  </div>
                </div>
              )}
            </div>

            <hr />

            {/* Soft Skills */}
            <div className='mb-4'>
              <div className='flex items-center cursor-pointer' onClick={toggleDropdownSS}>
                <MdPeople className='text-lg text-green-700 mt-2' />
                <h2 className='text-lg font-md items-center text-green-700 flex-1 ml-3 mt-2'>Soft Skills</h2>
                {isOpenSS ? <MdOutlineArrowDropUp className='text-lg text-green-700' /> : <MdOutlineArrowDropDown className='text-lg text-green-700' />}
              </div>
              {isOpenSS && (
                <div className='mt-2 w-full'>
                  <div className='mb-4'>
                    <h2 className='text-lg font-md text-green-700 text-center'>Key Soft Skills</h2>
                    <input
                      type='text'
                      placeholder='Enter your soft skills'
                      className='mt-2 p-2 w-full border border-gray-300 rounded-md'
                    />
                  </div>
                  <div className='mb-4'>
                    <h2 className='text-lg font-md text-green-700 text-center'>Proficiency Level</h2>
                    <select className='mt-2 p-2 w-full border border-gray-300 rounded-md'>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                  <div className='mb-4 text-center'>
                    <h2 className='text-lg font-md text-green-700'>Years of Experience</h2>
                    <input
                      type='number'
                      placeholder='Enter years'
                      className='mt-2 p-2 w-full border border-gray-300 rounded-md'
                    />
                  </div>
                </div>
              )}
            </div>

            <hr />

            {/* Objective Answers */}
            <div className='mb-4'>
              <div className='flex items-center cursor-pointer' onClick={toggleDropdownOA}>
                <MdAssignment className='text-lg text-green-700 mt-2' />
                <h2 className='text-lg font-md items-center text-green-700 flex-1 ml-3 mt-2'>Objective Answers</h2>
                {isOpenOA ? <MdOutlineArrowDropUp className='text-lg text-green-700' /> : <MdOutlineArrowDropDown className='text-lg text-green-700' />}
              </div>
              {isOpenOA && (
                <div className='mt-2 w-full'>
                  <div className='mb-4 text-center'>
                    <h2 className='text-lg font-md text-green-700'>Accuracy %</h2>
                    <input
                      type='range'
                      min='0'
                      max='100'
                      className='w-full mt-2 text-green-700'
                    />
                    <span>Adjust the percentage</span>
                  </div>
                </div>
              )}
            </div>

            <hr />

            {/* Subjective Answers */}
            <div className='mb-4'>
              <div className='flex items-center cursor-pointer' onClick={toggleDropdownSA}>
                <MdDescription className='text-lg text-green-700 mt-2' />
                <h2 className='text-lg font-md items-center text-green-700 flex-1 mt-2 ml-3'>Subjective Answers</h2>
                {isOpenSA ? <MdOutlineArrowDropUp className='text-lg text-green-700' /> : <MdOutlineArrowDropDown className='text-lg text-green-700' />}
              </div>
              {isOpenSA && (
                <div className='mt-2 w-full'>
                  <div className='mb-4 text-center'>
                    <h2 className='text-lg font-md text-green-700'>AI Scoring</h2>
                    <input
                      type='range'
                      min='0'
                      max='100'
                      className='w-full mt-2 text-green-700'
                    />
                    <span>Adjust AI %</span>
                  </div>
                  <div className='mb-4 text-center'>
                    <h2 className='text-lg font-md text-green-700'>Score Range</h2>
                    <input
                      type='range'
                      min='0'
                      max='100'
                      className='w-full mt-2 text-green-700'
                    />
                    <span>Adjust the score range</span>
                  </div>
                </div>
              )}
            </div>

            <div className='flex justify-center mt-4'>
              <button className='bg-green-700 text-white px-4 py-2 rounded-md flex items-center'>
                <MdFilterList className='mr-2' />
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Icon panel (for the 10% width) */}
      {!isSidebarOpen && (
        <div className="w-[6%] min-h-screen bg-gray-100 flex flex-col mt-8 items-center py-4 gap-y-3">
          {/* Icons to be relocated here */}
          <IoPricetagOutline className='text-2xl mb-4 text-green-700' />
          <MdOutlineShoppingBag className="text-2xl mb-4 text-green-700" />
          <GoMortarBoard className="text-2xl mb-4 text-green-700" />
          <MdPeople className="text-2xl mb-4 text-green-700" />
          <MdAssignment className="text-2xl mb-4 text-green-700" />
          <MdDescription className="text-2xl mb-4 text-green-700" />

          {/* Add more icons as needed */}
        </div>
      )}


      {/* right panel */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'w-[70%]' : 'w-[94%]'}`}>
        {/* Toggle button for sidebar */}
        <button
          onClick={toggleSidebar}
          className="absolute top-20 left-2 z-10 p-2  text-green-700 rounded-md"
        >
          {isSidebarOpen ? <MdArrowBackIosNew /> : <MdArrowForwardIos />}
        </button>



        <div className='flex gap-4 w-full'>
      <div className='flex relative flex-grow'>
        <input
          type='text'
          placeholder='Candidates with 3+ years exp'
          className='bg-bord border-2 w-full border-inp p-2 pl-10'
        />
        <FiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
      </div>

      {['Status', 'Experience', 'Degree', 'Hard Skills'].map((label, index) => (
        <div className='flex relative flex-grow' key={index}>
          <button
            className='flex items-center px-4 py-2 gap-1 bg-gray-100 hover:bg-gray-200 text-green-700 font-medium rounded-md'
            onClick={() => toggleDropdown(label)}
          >
            <TbCheckbox className='text-xl' />
            {label}
            <TbChevronDown className='ml-2 text-xl' />
          </button>

          {currentDropdown === label && (
            <div className='absolute left-0 mt-7 w-40 bg-white border border-gray-300 rounded-md shadow-lg'>
              <ul>
                <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Option 1</li>
                <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Option 2</li>
                <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Option 3</li>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>



        {/* main content */}
        <div className="p-6 overflow-x-auto">
          <div className="overflow-y-auto h-96"> {/* Add overflow-y with a set height */}
            <table className="min-w-full bg-white border border-gray-300 shadow-md">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Timestamp</th>
                  <th className="py-3 px-6 text-center">Score</th>
                  <th className="py-3 px-6 text-center">Status</th>
                  <th className="py-3 px-6 text-center">Resume</th>
                  <th className="py-3 px-6 text-center">Notes</th>
                  {/* <th className="py-3 px-6 text-center whitespace-nowrap">Why should we hire you?</th> */}


                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {dataState.map((item, index) => (
                  <React.Fragment key={index}>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-3" />
                          <div className="flex flex-col">
                            <span className="font-medium">{item.name}</span>
                            <div className="flex text-gray-500 space-x-2 text-xs">
                              <FiPhone />
                              <FiMail />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <FaClock className="mr-2" />
                          {item.timestamp}
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="relative flex items-center justify-center">
                          <AiOutlineCheckCircle className="text-green-500 inline" />
                          {item.score}
                          <AiOutlineDown
                            className="ml-2 cursor-pointer"
                            onClick={() => togglePopup(index)}
                          />
                          {/* Popup */}
                          {popupIndex === index && (
                            <div className="absolute top-full mt-2 left-0 bg-bord p-4 rounded shadow-lg z-10 ">
                              <h3 className="font-bold mb-2 text-green-900">Candidate Score Card</h3>
                              <div className="flex items-center mb-2 border-1 bg-white border-bord shadow-sm p-1 rounded-md">
                                <span className='font-medium  text-Routecho whitespace-nowrap'>Domain Knowledge:</span>
                                <div className="ml-2 text-yellow-500 flex">

                                  <FaStar />
                                  <FaStar />
                                  <FaStar />
                                  <FaStar />
                                  <FaStar />

                                </div>
                              </div>
                              <div className="flex items-center mb-2 border-1 border-bord shadow-sm bg-white p-1 rounded-md">
                                <span className='font-medium text-Routecho whitespace-nowrap'>Problem Solving:</span>
                                <div className="ml-2 text-yellow-500 flex">
                                  <FaStar />
                                  <FaStar />
                                  <FaStar />
                                  <FaStar />
                                </div>
                              </div>
                              <div className="flex items-center mb-2 border-1 border-bord bg-white p-1 shadow-sm rounded-md">
                                <span className='font-medium text-Routecho'>Communication:</span>
                                <div className="ml-2 text-yellow-500 flex">
                                  <FaStar />
                                  <FaStar />
                                  <FaStar />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center relative">
                        <div
                          className={`font-medium cursor-pointer ${item.statusColor}`}
                          onClick={() =>
                            setStatusDropdownIndex(
                              statusDropdownIndex === index ? null : index
                            )
                          }
                        >
                          {item.status}
                          <AiOutlineDown className="inline ml-1" />
                        </div>

                        {/* Status Dropdown */}
                        {statusDropdownIndex === index && (
                          <div className="absolute mt-2 w-36 bg-white shadow-lg rounded-md z-50">
                            <div
                              className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-green-700 font-medium border-1 rounded-md bg-bord"
                              onClick={() => handleStatusChange(index, "Shortlisted")}
                            >
                              Shortlisted
                            </div>
                            <hr />
                            <div
                              className="py-2 px-4 hover:bg-gray-100 cursor-pointer border-1 font-medium text-yellow-400 rounded-md bg-bord"
                              onClick={() => handleStatusChange(index, "Waitlisted")}
                            >
                              Waitlisted
                            </div>
                            <hr />
                            <div
                              className="py-2 px-4 hover:bg-gray-100 cursor-pointer border-1 font-medium text-red-600 rounded-md bg-bord"
                              onClick={() => handleStatusChange(index, "Rejected")}
                            >
                              Rejected
                            </div>
                          </div>
                        )}
                      </td>

                      <td className="py-3 px-6 text-center">
                        <input
                          type="file"
                          id="file-upload"
                          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-green-700 hover:file:bg-blue-100"
                          onChange={handleFileChange}
                        />
                      </td>


                      {/* Notes */}
                      <td className="py-3 px-6 text-center">
                        <div className="flex justify-center">
                          {/* Note icon is always visible */}
                          <button
                            className="text-green-700 bg-green-100 rounded-full px-4 py-2 hover:bg-green-200 whitespace-nowrap"
                            onClick={togglePopupNotes}
                          >

                            <FiMessageSquare className="text-gray-500" />
                          </button>

                          {/* Popup for viewing the pre-saved note */}
                          {showPopup && (
                            <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                              <div className="relative flex items-start space-x-2 bg-gray-800 text-white p-3 rounded-2xl rounded-bl-sm max-w-sm">
                                {/* Close button (cross icon) */}
                                <button
                                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                  onClick={togglePopupNotes}
                                >
                                  <FiX size={24} className="text-white bg-red-500 rounded-md p-1" />
                                </button>

                                {/* Title for note popup */}
                                <h2 className="font-bold text-lg mb-4">Albert Flores</h2>

                                {/* Display the pre-saved note */}
                                <div className="p-4 rounded-md">
                                  {preSavedNote}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Why should we hire you */}

                    </tr>
                  </React.Fragment>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>


    </div>
  );
}

export default HeroSection;
