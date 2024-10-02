import React, { useState } from 'react';
import './Hero.css'
import { FiSearch } from 'react-icons/fi';
import { IoPricetagOutline } from 'react-icons/io5';
import { GoMortarBoard } from 'react-icons/go';
import {
  MdOutlineShoppingBag, MdPeople, MdOutlineArrowDropUp, MdOutlineArrowDropDown, MdAssignment,
  MdDescription, MdFilterList, MdArrowBackIosNew, MdArrowForwardIos
} from 'react-icons/md';
import { CiCirclePlus } from "react-icons/ci";

import { FiPhone, FiMail, FiFileText, FiMessageSquare, FiX } from "react-icons/fi";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineDown } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import { FaStar, FaSortimport, FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { data } from '../data'
import { TbCheckbox, TbChevronDown } from "react-icons/tb";
import { MdOutlineLeaderboard } from "react-icons/md";
// import sidebar from '../assests/sidebar.svg'
import { ReactComponent as SidebarIcon } from '../assests/SidebarIcon.svg';
// import plus from '../assests/PLUS.png'
import inner from '../assests/Inner.png'
import home from '../assests/carbon_home.png'
import { GiBullseye } from "react-icons/gi";
import { GoQuestion } from "react-icons/go";
import { BsPatchQuestion } from "react-icons/bs";
import { RiDonutChartLine } from "react-icons/ri";
import carbonSkillLevel from '../assests/skill-level.svg';
import { IoDocumentOutline } from "react-icons/io5";
import { TfiLinkedin } from "react-icons/tfi";
import { LuSnowflake } from "react-icons/lu";
import { BiHide } from "react-icons/bi";
import { FaHome, FaPlus, FaCog } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineCog } from "react-icons/hi";

function HeroSection(key) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isOpenWE, setIsOpenWE] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

  const [isOpenEQ, setIsOpenEQ] = useState(false);
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
  const [isPop, setIsPop] = useState(false);
  const [isOAOpen, setIsOAOpen] = useState(false);
  const [accuracy, setAccuracy] = useState(50); // Default value

  // State for individual question toggles
  const [isQuestionOpen, setIsQuestionOpen] = useState({
    hire: false,
    work: false,
    redux: false,
    excite: false,
  });

  

  const toggleDropdownOA = () => {
    setIsOAOpen(!isOAOpen);
  };

  // Toggle visibility of specific question
  const toggleQuestion = (questionKey) => {
    setIsQuestionOpen((prevState) => ({
      ...prevState,
      [questionKey]: !prevState[questionKey],
    }));
  };

  const dropDown = () => {
    setIsPop(!isPop);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen

  );

  const [popupVisible, setPopupVisible] = useState(false);

  const item = { score: 97 }; // Example static data
  const index = 1; // Example index


  const handleClick = () => {
    setPopupVisible(!popupVisible);
    togglePopup(index);
  };

  const toggleDropdownWE = () => setIsOpenWE(!isOpenWE);
  const toggleDropdownEQ = () => setIsOpenEQ(!isOpenEQ);
  const toggleDropdownSS = () => setIsOpenSS(!isOpenSS);
  // const toggleDropdownOA = () => setIsOpenOA(!isOpenOA);
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


  const users = [
    { name: "Charlie Layne", avatar: "https://i.pravatar.cc/40?img=1" },
    { name: "Tatum Paolo", avatar: "https://i.pravatar.cc/40?img=2" },
    { name: "Mislav Abha", avatar: "https://i.pravatar.cc/40?img=3" },
    { name: "Anjali Wanda", avatar: "https://i.pravatar.cc/40?img=4" },
    // { name: "Jody Hekla", avatar: "https://i.pravatar.cc/40?img=5" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentDropdown, setCurrentDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setCurrentDropdown(currentDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className='flex mt-5 w-full'>
      {/* left panel */}

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="w-[23%] min-h-screen border-inp  border-[1px] rounded-md">
          <div className="p-3 w-full bg-white ">
            {/* Spikes Section */}
            <div className='mb-4'>
              <div className='flex items-center'>
                <GiBullseye className='text-lg text-green-700' />
                <h2 className='text-[16px] font-md text-Routecho ml-2'>Spikes</h2>
                <GoQuestion className='text-lg text-green-800 ml-1' />
              </div>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Add spike'
                  className='mt-2 w-[85%] border placeholder:text-Routecho border-gray-300 rounded-sm 
                 pt-[9px] pb-[9px] pr-[8px] pl-[40px]'
                />
                <FiSearch className='absolute inset-y-0 left-3 my-auto flex top-2 text-Routecho items-center ' />
              </div>

              <div className='mt-4 flex gap-x-7'>
                <label className='flex items-center text-green-700 text-[14px] bg-bord rounded-md p-1 pl-2 pr-2'>
                  <input type='checkbox' className='mr-2 text-green-700 ' />
                  B-Tech
                </label>
                <label className='flex items-center text-green-700 text-[14px] bg-bord rounded-md p-1 pl-2 pr-2'>
                  <input type='checkbox' className='mr-2 text-green-700' />
                  3-4 Yrs
                </label>
              </div>
            </div>

            <hr />

            {/* Educational Qualification */}
            <div className='mb-4 p-1'>
              <div className='flex items-center justify-between cursor-pointer' onClick={toggleDropdownEQ}>
                <div className='flex items-center'>
                  <GoMortarBoard className='text-lg text-Routecho' />
                  <h2 className='text-[16px] font-md text-Routecho ml-2'>Educational Qualification</h2>
                </div>
                <span>{isOpenEQ ? <MdOutlineArrowDropUp className='text-lg text-green-700' /> : <MdOutlineArrowDropDown className='text-lg text-green-700' />}</span>
              </div>
              {isOpenEQ && (
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
            <div className='mb-4 p-1'>
              <div className='flex items-center justify-between cursor-pointer' onClick={toggleDropdownWE}>
                <div className='flex items-center'>
                  <MdOutlineShoppingBag className='text-lg text-Routecho' />
                  <h2 className='text-[16px] font-md text-Routecho ml-2'>Work Experience</h2>
                </div>
                <span>{isOpenWE ? <MdOutlineArrowDropUp className='text-lg text-green-700' /> : <MdOutlineArrowDropDown className='text-lg text-green-700' />}</span>
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
            <div className='mb-4 p-1'>
              <div className='flex items-center justify-between cursor-pointer' onClick={toggleDropdownSS}>
                <div className='flex items-center'>
                  <MdPeople className='text-lg text-Routecho' />
                  <h2 className='text-[16px] font-md text-Routecho ml-2'>Soft Skills</h2>
                </div>
                <span>{isOpenSS ? <MdOutlineArrowDropUp className='text-lg text-green-700' /> : <MdOutlineArrowDropDown className='text-lg text-green-700' />}</span>
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
            <div className='mb-4 p-1'>
              <div>
                {/* Objective Answers Header */}
                <div className='flex items-center justify-between cursor-pointer' onClick={toggleDropdownOA}>
                  <div className='flex items-center'>
                    <BsPatchQuestion className='text-lg text-Routecho' />
                    <h2 className='text-[16px] font-md text-Routecho ml-2'>Objective Answers</h2>
                  </div>
                  <span>
                    {isOAOpen ? (
                      <MdOutlineArrowDropUp className='text-lg text-green-700' />
                    ) : (
                      <MdOutlineArrowDropDown className='text-lg text-green-700' />
                    )}
                  </span>
                </div>

                {/* Questions Section */}
                {isOAOpen && (
                  <div className='mt-4'>
                    {/* Why should we hire you? */}
                    <div className='mb-4 border shadow-lg p-4 rounded-2xl'>
                      <div className='flex justify-between cursor-pointer' onClick={() => toggleQuestion('hire')}>
                        <h3 className='font-semibold text-green-700'>Why should we hire you?</h3>
                        <span className='text-lg text-green-700'>
                          {isQuestionOpen.hire ? '−' : '+'}
                        </span>
                      </div>
                      {isQuestionOpen.hire && (
                        <ul className='list-none text-green-500'>
                          <li>
                            <input type='checkbox' /> Well, I excel in areas...
                          </li>
                          <li>
                            <input type='checkbox' /> Well, I excel in other areas...
                          </li>
                        </ul>
                      )}
                    </div>

                    {/* Why do you want to work with us? */}
                    <div className='mb-4 border shadow-lg p-4 rounded-2xl'>
                      <div className='flex justify-between cursor-pointer' onClick={() => toggleQuestion('work')}>
                        <h3 className='font-semibold text-green-700'>Why do you want to work with us?</h3>
                        <span className='text-lg text-green-700'>
                          {isQuestionOpen.work ? '−' : '+'}
                        </span>
                      </div>
                      {isQuestionOpen.work && (
                        <div>
                          {/* Answer for Why do you want to work with us? */}
                          <p>Your answer here...</p>
                        </div>
                      )}
                    </div>

                    {/* What excites you about this role? */}
                    <div className='mb-4 border shadow-lg p-4 rounded-2xl'>
                      <div className='flex justify-between cursor-pointer' onClick={() => toggleQuestion('excite')}>
                        <h3 className='font-semibold text-green-700'>What excites you about this role?</h3>
                        <span className='text-lg text-green-700'>
                          {isQuestionOpen.excite ? '−' : '+'}
                        </span>
                      </div>
                      {isQuestionOpen.excite && (
                        <div>
                          {/* Answer for What excites you about this role? */}
                          <p>Your answer here...</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <hr />

            {/* Subjective Answers */}
            <div className='mb-4 p-1'>
              <div className='flex items-center justify-between cursor-pointer' onClick={toggleDropdownSA}>
                <div className='flex items-center'>
                  <MdDescription className='text-lg text-Routecho' />
                  <h2 className='text-[16px] font-md text-Routecho ml-2'>Subjective Answers</h2>
                </div>
                <span>{isOpenSA ? <MdOutlineArrowDropUp className='text-lg text-green-700' /> : <MdOutlineArrowDropDown className='text-lg text-green-700' />}</span>
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
      {/* Closed Sidebar */}
      {!isSidebarOpen && (
        <div className="w-[6%] hidden sm:flex min-h-screen bg-gray-100 flex-col mt-10 items-center py-4 gap-y-5">
          {/* Sidebar Icons */}
          <GiBullseye className="h-[20px] w-[20px] text-Routecho" />
          <MdOutlineShoppingBag className="h-[20px] w-[20px] text-Routecho" />
          <GoMortarBoard className="h-[20px] w-[20px] text-Routecho" />
          <MdPeople className="h-[20px] w-[20px] text-Routecho" />
          {/* <MdAssignment className="h-[20px] w-[20px] text-Routecho" />
          <BsPatchQuestion className="h-[20px] w-[20px] text-Routecho" /> */}

          {/* Divider */}
          <hr className="w-full border-t mt-4 border-gray-300" />

          {/* Additional Sidebar Options */}
          <IoHomeOutline className="h-[20px] w-[20px] text-Routecho mt-4" />
          <CiCirclePlus className="h-[22px] w-[22px] text-Routecho mt-4" />
          <HiOutlineCog className="h-[20px] w-[20px] text-Routecho mt-4" />

          {/* Bottom Profile Image */}
          <div className="mt-auto mb-4">
            <img
              src={inner}
              className="h-[30px] w-[30px] mb-24 rounded-full" // Adjust the size to match your design
              alt="User Profile"
            />
          </div>
        </div>
      )}

      {/* right panel */}

      <div className={`transition-all duration-300 mb-0 ${isSidebarOpen ? 'w-full sm:w-[70%]' : 'w-full sm:w-[96%]'}`}>
        {/* Toggle button for sidebar */}
        <div>
          <button
            onClick={toggleSidebar}
            className={`absolute top-20 ${isSidebarOpen ? 'left-60' : 'left-3'} z-10 p-4 w-12 h-12 rounded-md`}
            style={{ bottom: '12px' }}
          >
            <SidebarIcon className="text-Routecho text-2xl" />
          </button>

          {/* above filters */}
          <div>


            {/* above filters */}
            <div className='flex items-center justify-between mx-auto p-4 bg-white border-b'>
              <div className="flex items-center flex-1 mr-4">
                <div className="flex items-center border-inp border-[1px] w-full px-2 rounded-md">
                  <FiSearch className="text-Routecho text-xl mr-2" /> {/* Search icon */}
                  <input
                    type="text"
                    className={`search-box placeholder:text-[14px] ${isSidebarOpen ? 'w-[231px]' : 'w-[340px]'} border-[1px] border-inp`}
                    style={{ height: '41px' }}
                    placeholder="Candidates with 3+ years experience in MERN Stack"
                  />
                </div>
              </div>

              {/* Dropdown buttons */}
              <div className='flex items-center space-x-4'>
                {/* Status Button */}
                <div className='flex'>
                  <button
                    className='flex items-center w-[140px] h-[41px] px-2 py-1 text-[14px] whitespace-nowrap gap-1 border-inp border-[1px] text-Routecho font-medium rounded-md'
                    onClick={() => toggleDropdown('Status')}
                  >
                    <TbCheckbox className='text-xl' />
                    <span className='ml-2'>Status</span>
                    <TbChevronDown className='ml-5 text-xl' />
                  </button>

                  {currentDropdown === 'Status' && (
                    <div className='absolute left-0 mt-7 w-40 bg-white border border-greey rounded-md shadow-lg'>
                      <ul>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Option 1</li>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Option 2</li>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Option 3</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Experience Button - Always render it next to Status when sidebar is closed */}
                {!isSidebarOpen && (
                  <div className='flex'>
                    <button
                      className='flex items-center w-[140px] h-[41px] px-2 py-1 text-[14px] whitespace-nowrap gap-1 border-inp border-[1px] text-Routecho font-medium rounded-md'
                      onClick={() => toggleDropdown('Experience')}
                    >
                      <MdOutlineShoppingBag className='text-xl' />
                      Experience
                      <TbChevronDown className='ml-2 text-xl' />
                    </button>

                    {currentDropdown === 'Experience' && (
                      <div className='absolute left-0 mt-7 w-40 bg-white border border-gray-300 rounded-md shadow-lg'>
                        <ul>
                          <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Option 1</li>
                          <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Option 2</li>
                          <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Option 3</li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Degree Button */}
                <div className='flex'>
                  <button
                    className='flex items-center w-[140px] h-[41px] px-2 py-1 text-[14px] whitespace-nowrap gap-1 border-inp border-[1px] text-Routecho font-medium rounded-md'
                    onClick={() => toggleDropdown('Degree')}
                  >
                    <GoMortarBoard className='text-xl' />
                    Degree
                    <TbChevronDown className='ml-5 text-xl' />
                  </button>

                  {currentDropdown === 'Degree' && (
                    <div className='absolute left-0 mt-7 w-40 bg-white border border-gray-300 rounded-md shadow-lg'>
                      <ul>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Option 1</li>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Option 2</li>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Option 3</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Hard Skills Button */}
                <div className='flex'>
                  <button
                    className='flex items-center w-[140px] h-[41px] px-2 py-1 text-[14px] whitespace-nowrap gap-1 border-inp border-[1px] text-Routecho font-medium rounded-md'
                    onClick={() => toggleDropdown('Hard Skills')}
                  >
                    <MdOutlineLeaderboard className='text-xl' />
                    Hard Skills
                    <TbChevronDown className='ml-2 text-xl' />
                  </button>

                  {currentDropdown === 'Hard Skills' && (
                    <div className='absolute left-0 mt-7 w-40 bg-white border border-gray-300 rounded-md shadow-lg'>
                      <ul>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Option 1</li>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Option 2</li>
                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Option 3</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Avatar */}
              <div className="relative inline-block text-left ml-3">
                {/* Avatar group */}
                <div className="flex -space-x-2" onClick={dropDown}>
                  {users.slice(0, 2).map((user, index) => (
                    <img
                      key={index}
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                  <div className="w-10 h-10 bg-green-900 text-white text-center rounded-full flex items-center justify-center border-2 border-white">
                    +{users.length - 2}
                  </div>
                </div>

                {/* Dropdown */}
                {isPop && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <ul className="py-1">
                      {users.map((user, index) => (
                        <li
                          key={index}
                          className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                        >
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-8 h-8 rounded-full mr-3"
                          />
                          <span>{user.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>



        {/* main content */}
        <div className="p-0 overflow-x-auto border-[1px]  ml-4 border-greey">
          <div className="overflow-y-auto ml-1 w-[1200px] mx-auto h-96">
            <table className="min-w-full bg-white shadow-md">
              <thead>
                <tr className="bg-gray-200 text-kala font-Plus Jakarta Sans uppercase text-[13px] leading-normal">
                  <th className="py-3 px-6 text-left items-center">Name</th>
                  <th className="py-3 px-6 text-left items-center space-x-1 flex">
                    <span>Timestamp</span>
                   
                  </th>
                  <th className="py-3 px-6 text-center">Score</th>
                  <th className="py-3 px-6  text-center">Status</th>
                  <th className="py-3 px-6 text-center">Resume</th>
                  <th className="py-3 px-6 text-center">Notes</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {dataState.map((item, index) => (
                  <React.Fragment key={index}>
                    <tr className="hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap border-r-2 border-name">
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-3 bg-inp" />
                          <div className="flex flex-col">
                            <span className="font-medium">{item.name}</span>
                            <div className="flex text-gray-500 space-x-2 text-xs">
                              <FiPhone />
                              <FiMail />
                              <TfiLinkedin />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center whitespace-nowrap text-[12px] text-greey">
                          {item.timestamp}
                        </div>
                      </td>

                      {/* score */}
                      <td className="py-3 px-6 text-center">
                        <div className="relative flex items-center justify-center">
                          <div className="relative">
                            <RiDonutChartLine className="text-darkG w-full h-full inline text-3xl" />
                            <span className="absolute inset-0 flex items-center justify-center text-greey text-[10px] font-bold">
                              {item.score}
                            </span>
                          </div>
                          <AiOutlineDown
                            className="ml-0 cursor-pointer text-xs"
                            onClick={() => togglePopup(index)}
                          />
                        </div>
                      </td>

                      {/* status */}
                      <td className="py-3 px-6 text-center relative">
                        <div
                          className={`font-medium cursor-pointer flex items-center ml-auto`}
                          onClick={() =>
                            setStatusDropdownIndex(statusDropdownIndex === index ? null : index)
                          }
                          style={{
                            backgroundColor:
                              item.status === 'Shortlisted'
                                ? '#F0FFF8'
                                : item.status === 'Waitlisted'
                                  ? '#FEFFE5'
                                  : item.status === 'Rejected'
                                    ? '#FFF0F0'
                                    : 'transparent',
                            color:
                              item.status === 'Shortlisted'
                                ? '#28A745'
                                : item.status === 'Waitlisted'
                                  ? '#FFC107'
                                  : item.status === 'Rejected'
                                    ? '#DC3545'
                                    : 'black',
                            padding: '8px 16px',
                            borderRadius: '12px',
                            border: '1px solid transparent',
                            width: 'fit-content',
                            margin: '3px',
                            
                          }}
                        >
                          {item.status}
                          <AiOutlineDown
                            className="ml-1"
                            style={{
                              color:
                                item.status === 'Shortlisted'
                                  ? '#28A745'
                                  : item.status === 'Waitlisted'
                                    ? '#FFC107'
                                    : item.status === 'Rejected'
                                      ? '#DC3545'
                                      : 'black',
                            }}
                          />
                        </div>

                        {statusDropdownIndex === index && (
                          <div className="absolute mt-2 w-36 bg-white shadow-lg rounded-md z-50">
                            <div
                              className="py-2 px-4 hover:bg-gray-100 cursor-pointer font-medium text-green-700 rounded-md"
                              onClick={() => handleStatusChange(index, 'Shortlisted')}
                            >
                              Shortlisted
                            </div>
                            <hr />
                            <div
                              className="py-2 px-4 hover:bg-gray-100 cursor-pointer font-medium text-yellow-400 rounded-md"
                              onClick={() => handleStatusChange(index, 'Waitlisted')}
                            >
                              Waitlisted
                            </div>
                            <hr />
                            <div
                              className="py-2 px-4 hover:bg-gray-100 cursor-pointer font-medium text-red-600 rounded-md"
                              onClick={() => handleStatusChange(index, 'Rejected')}
                            >
                              Rejected
                            </div>
                          </div>
                        )}
                      </td>

                      {/* resume */}
                      <td className="py-3 px-6 text-center">
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer inline-flex items-center px-4 py-2 text-Routecho bg-white border border-inp rounded-md shadow-sm text-sm font-medium hover:bg-blue-100"
                        >
                          <IoDocumentOutline className="w-5 h-5 mr-2" />
                          <span className='text-[12px] text-Routecho'> Resume.pdf</span>
                        </label>
                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </td>

                      {/* Notes */}
                      <td className="py-3 px-6 text-center">
                        <div className="flex justify-center">
                          <button
                            className="text-green-700 bg-green-100 rounded-full px-4 py-2 hover:bg-green-200 whitespace-nowrap"
                            onClick={togglePopupNotes}
                          >
                            <FiMessageSquare className="text-gray-500" />
                          </button>
                        </div>
                      </td>
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
