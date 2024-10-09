import React, { useState } from "react";
import "./Hero.css";
import { FiSearch } from "react-icons/fi";
import { IoPricetagOutline } from "react-icons/io5";
import { GoMortarBoard } from "react-icons/go";
import {
  MdOutlineShoppingBag,
  MdPeople,
  MdOutlineArrowDropUp,
  MdOutlineArrowDropDown,
  MdAssignment,
  MdDescription,
  MdFilterList,
  MdArrowBackIosNew,
  MdArrowForwardIos,
} from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { MdPeopleOutline } from "react-icons/md";

import {
  FiPhone,
  FiMail,
  FiFileText,
  FiMessageSquare,
  FiX,
} from "react-icons/fi";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineDown,
} from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import {
  FaStar,
  FaSortimport,
  FaSort,
  FaSortUp,
  FaSortDown,
} from "react-icons/fa";
import { data } from "../data";
import { TbCheckbox, TbChevronDown } from "react-icons/tb";
import { MdOutlineLeaderboard } from "react-icons/md";
import { CiStickyNote } from "react-icons/ci";
// import sidebar from '../assests/sidebar.svg'
import { ReactComponent as SidebarIcon } from "../assests/SidebarIcon.svg";
// import plus from '../assests/PLUS.png'
import inner from "../assests/Inner.png";
import home from "../assests/carbon_home.png";
import { GiBullseye } from "react-icons/gi";
import { GoQuestion } from "react-icons/go";
import { BsPatchQuestion } from "react-icons/bs";
import { RiDonutChartLine } from "react-icons/ri";
import carbonSkillLevel from "../assests/skill-level.svg";
import { IoDocumentOutline } from "react-icons/io5";
import { TfiLinkedin } from "react-icons/tfi";
import { LuSnowflake } from "react-icons/lu";
import { BiHide } from "react-icons/bi";
import { FaHome, FaPlus, FaCog } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineCog } from "react-icons/hi";
import bullie from "../assests/bulleye.png";
import { IoIosClose } from "react-icons/io";
import { PiSealQuestionThin } from "react-icons/pi";
import avat from "../assests/face.png";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { theadData } from "./svgdata";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { GoSidebarCollapse } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md";

function HeroSection(key) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isOpenWE, setIsOpenWE] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [value, setValue] = useState(0); // Initial value of the slider

  const handleChange = (e) => {
    setValue(e.target.value); // Update the value on change
  };

  const [range, setRange] = useState([2, 6]); // Initial values for the slider

  const handleRangeChange = (value) => {
    setRange(value);
  };

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
  const [showNotePopup, setShowNotePopup] = useState(false);
  // const [showFullButton, setShowFullButton] = useState(false); // State to toggle button view
  const [note, setNote] = useState(""); // State to store the note content
  const [isEditing, setIsEditing] = useState(false); // State to determine if note is being edited
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(null);

  const [activeItemId, setActiveItemId] = useState(null);

  // const toggleButtonView = () => {
  //   setShowFullButton(!showFullButton);
  // };

  const handleNoteChange = (e) => {
    setNote(e.target.value); // Update note state when input changes
  };

  const saveNote = () => {
    setIsEditing(false); // Save note and stop editing mode
  };

  const togglePopupNotesO = () => {
    setShowNotePopup(!showNotePopup);
  };

  // State for individual question toggles
  const [isQuestionOpen, setIsQuestionOpen] = useState({
    hire: false,
    work: false,
    redux: false,
    excite: false,
  });

  const [showFullButton, setShowFullButton] = useState(false);

  // Function to toggle between the icon and full button
  const toggleButtonView = () => {
    setShowFullButton(!showFullButton);
  };

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

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const [popupVisible, setPopupVisible] = useState(false);

  const item = { score: 97 }; // Example static data
  const index = 1; // Example index

  const handleClick = () => {
    setPopupVisible(!popupVisible);
    togglePopup(index);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(null);

  // Step 2: Define the togglePopup function
  const togglePopUp = (index) => {
    // If the same popup is clicked, close it; otherwise, open the selected one
    setIsPopupOpen(isPopupOpen === index ? null : index);
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
      console.log("File uploaded:", selectedFile);
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
    <div className="flex mt-5 w-full">
      {/* left panel */}

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 min-h-screen border-inp border-[1px] rounded-md">
          <div className="p-3 w-full bg-white ">
            {/* Spikes Section */}
            <div className="mb-4">
              <div className="flex items-center text-Routecho">
                <img src={bullie} className="w-[20px] h-[20px] text-Routecho" />
                <h2 className="text-[16px] font-semibold w-[90px] h-[25px] text-[#004838] ml-2">
                  Spikes
                </h2>
                <GoQuestion className="text-xl font-semibold text-[#004838] -ml-9" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Add spike"
                  className="mt-2 w-[85%] border placeholder:text-Routecho border-gray-300 rounded-sm 
                 pt-[9px] pb-[9px] pr-[8px] pl-[40px]"
                />
                <FiSearch className="absolute inset-y-0 left-3 my-auto flex top-2 text-Routecho items-center " />
              </div>

              <div className="mt-4 flex gap-x-7">
                <label className="flex items-center text-green-700 text-[14px] bg-bord rounded-md p-1 pl-2 pr-2">
                  <input type="checkbox" className="mr-2 text-green-700" />
                  B-Tech
                  <IoIosClose className="w-[18px] h-[18px] text-Routecho ml-1" />
                </label>
                <label className="flex items-center text-green-700 text-[14px] bg-bord rounded-md p-1 pl-2 pr-2">
                  <input type="checkbox" className="mr-2 text-green-700" />
                  3-4 Yrs
                  <IoIosClose className="w-[18px] h-[18px] text-Routecho ml-1" />
                </label>
              </div>
            </div>

            <hr />

            {/* Educational Qualification */}
            <div className="mb-4 p-1">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={toggleDropdownEQ}
              >
                <div className="flex items-center">
                  <GoMortarBoard className="text-lg text-Routecho" />
                  <h2 className="text-[16px] font-md text-Routecho ml-2">
                    Educational Qualification
                  </h2>
                </div>
                <span>
                  {isOpenEQ ? (
                    <MdOutlineArrowDropUp className="text-lg text-green-700" />
                  ) : (
                    <MdOutlineArrowDropDown className="text-lg text-green-700" />
                  )}
                </span>
              </div>
              {isOpenEQ && (
                <div className="mt-2 p-2 w-full border border-gray-300 rounded-md">
                  <select className="p-2 w-full border border-gray-300 rounded-md">
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
              )}
            </div>

            <hr />

            {/* Work Experience */}
            <div className="mb-4 p-1">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={toggleDropdownWE}
              >
                <div className="flex items-center">
                  <MdOutlineShoppingBag className="text-lg text-Routecho" />
                  <h2 className="text-[16px] font-md text-Routecho ml-2">
                    Work Experience
                  </h2>
                </div>
                <span>
                  {isOpenWE ? (
                    <MdOutlineArrowDropUp className="text-lg text-green-700" />
                  ) : (
                    <MdOutlineArrowDropDown className="text-lg text-green-700" />
                  )}
                </span>
              </div>
              {isOpenWE && (
                <div className="mt-4">
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <p className="text-green-600">Range (In Years)</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-[10px] text-Routecho">MUST HAVE</p>
                        <input
                          type="checkbox"
                          className="mr-2 text-green-700"
                        />
                      </div>
                    </div>
                    {/* <input type='range' min='0' max='20' className='w-full mt-2 text-green-700' />
                     */}
                    <div className="flex items-center mt-2">
                      <Slider
                        range
                        min={1}
                        max={10}
                        value={range}
                        onChange={handleRangeChange}
                        trackStyle={[{ backgroundColor: "#004838", height: 6 }]} // Track between thumbs
                        handleStyle={[
                          {
                            borderColor: "#004838",
                            height: 14,
                            width: 14,
                            marginTop: -4,
                            backgroundColor: "#ffffff",
                          }, // Thumb styles
                          {
                            borderColor: "#004838",
                            height: 14,
                            width: 14,
                            marginTop: -4,
                          },
                        ]}
                        railStyle={{ backgroundColor: "#d1d5db", height: 6 }} // Rail (background track)
                      />
                    </div>

                    <div className="flex justify-between mt-2 text-gray-700">
                      <span>{range[0]} Years</span>
                      <span>{range[1]} Years</span>
                    </div>

                    <div className="flex justify-between items-center mt-5">
                      <p className="text-green-600">Job Role</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-[10px] text-Routecho">MUST HAVE</p>
                        <input
                          type="checkbox"
                          className="mr-2 text-green-700"
                        />
                      </div>
                    </div>

                    <input
                      type="text"
                      placeholder="Product Manager"
                      className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                    />

                    <div className="flex justify-between items-center mt-5">
                      <p className="text-green-600">Company Name</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-[10px] text-Routecho">MUST HAVE</p>
                        <input
                          type="checkbox"
                          className="mr-2 text-green-700"
                        />
                      </div>
                    </div>

                    <input
                      type="text"
                      placeholder="Goldman Sachs"
                      className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mt-5">
                      <p className="text-green-600">Company Name</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-[10px] text-Routecho">MUST HAVE</p>
                        <input
                          type="checkbox"
                          className="mr-2 text-green-700"
                        />
                      </div>
                    </div>
                    <label className="flex items-center">
                      <input type="radio" name="tier" className="mr-2" /> Tier 1
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="tier" className="mr-2" /> Tier 2
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="tier" className="mr-2" /> Tier 3
                    </label>
                  </div>
                  <div className="mb-4">
                    <h2 className="text-lg font-md text-green-700">
                      Employee Stickiness
                    </h2>
                    <input type="checkbox" className="mr-2" /> Must have
                  </div>
                </div>
              )}
            </div>

            <hr />

            {/* Soft Skills */}
            <div className="mb-4 p-1">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={toggleDropdownSS}
              >
                <div className="flex items-center">
                  <MdPeople className="text-lg text-Routecho" />
                  <h2 className="text-[16px] font-md text-Routecho ml-2">
                    Soft Skills
                  </h2>
                </div>
                <span>
                  {isOpenSS ? (
                    <MdOutlineArrowDropUp className="text-lg text-green-700" />
                  ) : (
                    <MdOutlineArrowDropDown className="text-lg text-green-700" />
                  )}
                </span>
              </div>
              {isOpenSS && (
                <div className="mt-2 w-full">
                  <div className="mb-4">
                    <h2 className="text-lg font-md text-green-700 text-center">
                      Key Soft Skills
                    </h2>
                    <input
                      type="text"
                      placeholder="Enter your soft skills"
                      className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <h2 className="text-lg font-md text-green-700 text-center">
                      Proficiency Level
                    </h2>
                    <select className="mt-2 p-2 w-full border border-gray-300 rounded-md">
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                  <div className="mb-4 text-center">
                    <h2 className="text-lg font-md text-green-700">
                      Years of Experience
                    </h2>
                    <input
                      type="number"
                      placeholder="Enter years"
                      className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              )}
            </div>

            <hr />

            {/* Objective Answers */}
            <div className="mb-4 p-1">
              <div>
                {/* Objective Answers Header */}
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={toggleDropdownOA}
                >
                  <div className="flex items-center">
                    <BsPatchQuestion className="text-lg text-Routecho" />
                    <h2 className="text-[16px] font-md text-Routecho ml-2">
                      Objective Answers
                    </h2>
                  </div>
                  <span>
                    {isOAOpen ? (
                      <MdOutlineArrowDropUp className="text-lg text-green-700" />
                    ) : (
                      <MdOutlineArrowDropDown className="text-lg text-green-700" />
                    )}
                  </span>
                </div>

                {/* Questions Section */}
                {isOAOpen && (
                  <div className="mt-4">
                    {/* Why should we hire you? */}
                    <div className="mb-4 border shadow-lg p-4 rounded-2xl">
                      <div
                        className="flex justify-between cursor-pointer"
                        onClick={() => toggleQuestion("hire")}
                      >
                        <h3 className="font-semibold text-green-700">
                          Why should we hire you?
                        </h3>
                        <span className="text-lg text-green-700">
                          {isQuestionOpen.hire ? "−" : "+"}
                        </span>
                      </div>
                      {isQuestionOpen.hire && (
                        <ul className="list-none text-green-500">
                          <li>
                            <input type="checkbox" /> Well, I excel in areas...
                          </li>
                          <li>
                            <input type="checkbox" /> Well, I excel in other
                            areas...
                          </li>
                        </ul>
                      )}
                    </div>

                    {/* Why do you want to work with us? */}
                    <div className="mb-4 border shadow-lg p-4 rounded-2xl">
                      <div
                        className="flex justify-between cursor-pointer"
                        onClick={() => toggleQuestion("work")}
                      >
                        <h3 className="font-semibold text-green-700">
                          Why do you want to work with us?
                        </h3>
                        <span className="text-lg text-green-700">
                          {isQuestionOpen.work ? "−" : "+"}
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
                    <div className="mb-4 border shadow-lg p-4 rounded-2xl">
                      <div
                        className="flex justify-between cursor-pointer"
                        onClick={() => toggleQuestion("excite")}
                      >
                        <h3 className="font-semibold text-green-700">
                          What excites you about this role?
                        </h3>
                        <span className="text-lg text-green-700">
                          {isQuestionOpen.excite ? "−" : "+"}
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
            <div className="mb-4 p-1">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={toggleDropdownSA}
              >
                <div className="flex items-center">
                  <MdDescription className="text-lg text-Routecho" />
                  <h2 className="text-[16px] font-md text-Routecho ml-2">
                    Subjective Answers
                  </h2>
                </div>
                <span>
                  {isOpenSA ? (
                    <MdOutlineArrowDropUp className="text-lg text-green-700" />
                  ) : (
                    <MdOutlineArrowDropDown className="text-lg text-green-700" />
                  )}
                </span>
              </div>
              {isOpenSA && (
                <div className="mt-2 w-full">
                  <div className="mb-4 text-center">
                    <h2 className="text-lg font-md text-green-700">
                      AI Scoring
                    </h2>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      className="w-full mt-2 text-green-700"
                    />
                    <span>Adjust AI %</span>
                  </div>
                  <div className="mb-4 text-center">
                    <h2 className="text-lg font-md text-green-700">
                      Score Range
                    </h2>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      className="w-full mt-2 text-green-700"
                    />
                    <span>Adjust the score range</span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center mt-4">
              <button className="bg-green-700 text-white px-4 py-2 rounded-md flex items-center">
                <MdFilterList className="mr-2" />
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Icon panel (for the 10% width) */}
      {/* Closed Sidebar */}
      {!isSidebarOpen && (
        <div
          className="w-[5%] hidden sm:flex min-h-screen  flex-col mt-1 shadow-lg items-center py-4 gap-y-7"
          style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)" }}
        >
          {!isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              className={`${
                isSidebarOpen ? "left-52" : "left-1"
              } z-10 p-4 w-12 h-12 rounded-md`}
              style={{
                bottom: "12px",
                // boxShadow: !isSidebarOpen ? '1px 0px 6px rgba(0, 0, 0, 0.3)' : 'none'  // Apply shadow only when sidebar is closed
              }}
            >
              {isSidebarOpen ? (
                <SidebarIcon className="text-3xl text-Routecho" />
              ) : (
                <GoSidebarCollapse className="text-3xl text-black" />
              )}
            </button>
          )}

          <img
            src={bullie}
            alt="Bullseye Icon"
            className="w-[40px] h-[40px] text-green-950 bg-[#EEF2FF] rounded-full border-2 p-2"
          />

          <MdWorkOutline className="h-[20px] w-[20px] text-Routecho" />
          <GoMortarBoard className="h-[20px] w-[20px] text-Routecho" />
          <MdPeopleOutline className="h-[20px] w-[20px] text-Routecho" />
          <MdOutlineLeaderboard className="h-[20px] w-[20px] text-Routecho" />
          <PiSealQuestionThin className="h-[25px] w-[25px] text-Routecho" />
          <hr className="w-full border-t mt-4 border-gray-300" />
          <IoHomeOutline className="h-[20px] w-[20px] text-Routecho mt-4" />
          <CiCirclePlus className="h-[22px] w-[22px] text-Routecho mt-4" />
          <HiOutlineCog className="h-[20px] w-[20px] text-Routecho mt-4" />

          <hr className="w-full border-t mt-28 border-gray-300" />

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
      <div
        className={`transition-all duration-300  mb-0 ${
          isSidebarOpen ? "w-full -ml-2 sm:w-[80%]" : "w-full sm:w-[94%]"
        }`}
      >
        {/* Toggle button for sidebar */}
        <div>
          {isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              className={`absolute top-20 ${
                isSidebarOpen ? "left-52" : "left-1"
              } z-10 p-4 w-12 h-12 rounded-md`}
              style={{
                bottom: "12px",
                // boxShadow: !isSidebarOpen ? '1px 0px 6px rgba(0, 0, 0, 0.3)' : 'none'  // Apply shadow only when sidebar is closed
              }}
            >
              {isSidebarOpen ? (
                <SidebarIcon className="text-3xl text-Routecho" />
              ) : (
                <GoSidebarCollapse className="text-3xl text-black" />
              )}
            </button>
          )}

          {/* above filters */}
          <div className="flex justify-between space-x-4 ml-10">
            <div className="flex items-center justify-between mx-auto p-4">
              {/* Search Input */}
              <div className="flex items-center flex-1 mr-4 space-x-4">
                {" "}
                {/* Added space-x-4 */}
                <div className="flex items-center border-2 rounded-md px-2">
                  <FiSearch className="text-Routecho text-xl mr-2" />{" "}
                  {/* Search icon */}
                  <input
                    type="text"
                    className={`search-box ${
                      isSidebarOpen ? "w-[231px]" : "w-[440px]"
                    }`}
                    style={{ height: "41px" }}
                    placeholder="Candidates with 3+ years experience in MERN Stack"
                  />
                </div>
              </div>

              {/* Dropdown Buttons */}
              <div className="flex items-center space-x-5">
                {" "}
                {/* Kept space-x-4 for uniform spacing */}
                {/* Status Button */}
                <div className="relative">
                  <button
                    className="flex items-center w-[170px] h-[41px] px-2 py-1 text-[14px] whitespace-nowrap gap-1 border-inp border-[1px] text-Routecho font-medium rounded-md"
                    onClick={() => toggleDropdown("Status")}
                  >
                    <TbCheckbox className="text-xl" />
                    <span className="ml-2">Status</span>
                    <TbChevronDown className="ml-11 text-xl" />
                  </button>

                  {currentDropdown === "Status" && (
                    <div className="absolute z-50 mt-1 w-full bg-white border border-greey rounded-md shadow-lg">
                      <ul>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          Option 1
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          Option 2
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          Option 3
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                {/* Experience Button */}
                <div className="relative">
                  <button
                    className="flex items-center w-[170px] h-[41px] px-2 py-1 text-[14px] whitespace-nowrap gap-1 border-inp border-[1px] text-Routecho font-medium rounded-md"
                    onClick={() => toggleDropdown("Experience")}
                  >
                    <MdOutlineShoppingBag className="text-xl" />
                    Experience
                    <TbChevronDown className="ml-11 text-2xl" />
                  </button>

                  {currentDropdown === "Experience" && (
                    <div className="absolute z-50 mt-1 w-full bg-white border border-greey rounded-md shadow-lg">
                      <ul>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          Option 1
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          Option 2
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          Option 3
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                {/* Degree Button */}
                <div className="relative">
                  <button
                    className="flex items-center w-[164px] h-[41px] px-2 py-1 text-[14px] whitespace-nowrap gap-1 border-inp border-[1px] text-Routecho font-medium rounded-md"
                    onClick={() => toggleDropdown("Degree")}
                  >
                    <GoMortarBoard className="text-xl" />
                    Degree
                    <TbChevronDown className="ml-11 text-xl" />
                  </button>

                  {currentDropdown === "Degree" && (
                    <div className="absolute z-50 left-0 mt-1 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
                      <ul>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          Option 1
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          Option 2
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          Option 3
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                {/* Hard Skills Button */}
                <div className="relative">
                  <button
                    className="flex items-center w-[170px] h-[41px] px-2 py-1 text-[14px] whitespace-nowrap gap-1 border-inp border-[1px] text-Routecho font-medium rounded-md"
                    onClick={() => toggleDropdown("Hard Skills")}
                  >
                    <MdOutlineLeaderboard className="text-xl" />
                    Hard Skills
                    <TbChevronDown className="ml-7 text-xl" />
                  </button>

                  {currentDropdown === "Hard Skills" && (
                    <div className="absolute z-50 left-0 mt-1 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
                      <ul>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          Option 1
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          Option 2
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          Option 3
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* main content */}
        <div className="p-0 border-name ml-5">
          <div className="ml-5 w-full mx-auto min-h-96">
            <table className="relative -right-4 min-w-full bg-white border-name border-2 rounded-lg shadow-md">
              <thead>
                <tr className="bg-[#F5F6F3] text-kala font-[600px] h-[56px] Jakarta Sans uppercase text-[13px] leading-normal">
                  <th className="py-3 px-4 text-left">
                    <div className="flex items-center justify-start">
                      <input type="checkbox" className=" bg-inp" />
                      <span className="ml-2">Name</span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block ml-1"
                      >
                        <path
                          d="M12.4096 20.4148C12.2106 20.6992 11.7894 20.6992 11.5904 20.4148L7.30071 14.2867C7.06874 13.9553 7.30582 13.5 7.71033 13.5H16.2897C16.6942 13.5 16.9313 13.9553 16.6993 14.2867L12.4096 20.4148Z"
                          fill="#D8D3D3"
                        />
                        <path
                          d="M12.4096 3.58517C12.2106 3.30081 11.7894 3.30081 11.5904 3.58517L7.30071 9.71327C7.06874 10.0447 7.30582 10.5 7.71033 10.5H16.2897C16.6942 10.5 16.9313 10.0447 16.6993 9.71327L12.4096 3.58517Z"
                          fill="#D8D3D3"
                        />
                      </svg>
                    </div>
                  </th>

                  {theadData.map((data) => (
                    <th className="py-3 px-6 text-center">
                      <span>{data.name}</span>
                      {data.svg[0]}
                      {data.svg[1]}
                      {/* {data.svg[2]} */}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light border-b border-[1px] border-name">
                {dataState.map((item, index) => (
                  <React.Fragment key={index}>
                    <tr className="hover:bg-gray-100 border-b border-[1px] border-name">
                      <td className="px-3 text-left whitespace-nowrap border-r-2  border-name">
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-3 bg-inp" />
                          <div className="flex flex-col">
                            <span className="font-medium">{item.name}</span>
                            <div className="flex text-gray-400 mt-1 space-x-2 text-sm">
                              <FaLinkedin />
                              <IoMdMail />
                              <FaPhone />
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center whitespace-nowrap text-[13px] text-greey">
                          {item.timestamp}
                        </div>
                      </td>

                      {/* score */}

                      <td className="py-3 px-6 text-center">
                        <div className="relative flex items-center justify-center">
                          <div
                            className="relative cursor-pointer"
                            onClick={() => togglePopUp(index)}
                          >
                            {/* Score donut chart */}
                            <RiDonutChartLine className="text-darkG w-full h-full inline text-3xl" />
                            <span className="absolute inset-0 flex items-center justify-center text-greey text-[10px] font-bold">
                              {item.score}
                            </span>
                          </div>

                          {/* Down arrow for toggling */}
                          <AiOutlineDown
                            className="ml-0 cursor-pointer text-xs"
                            onClick={() => togglePopUp(index)}
                          />

                          {/* Popup Scorecard */}
                          {isPopupOpen === index && (
                            <div className="absolute top-6 left-16 z-20 w-60 bg-[#F5F6F3] border border-gray-300 shadow-lg rounded-md p-4">
                              <h3 className="font-bold text-[#004838] mb-2">
                                Candidate Score Card
                              </h3>

                              {/* Domain Knowledge Section */}
                              <div className="flex justify-between items-center mb-1 p-2 border-[0.64px] rounded bg-[#FFFFFF]">
                                <span className="text-[14px] font-medium text-[#004838]">
                                  Domain Knowledge
                                </span>
                                <div className="flex items-center">
                                  {/* 3 yellow stars */}
                                  <span className="text-yellow-500">★</span>
                                  <span className="text-yellow-500">★</span>
                                  <span className="text-yellow-500">★</span>
                                  {/* 2 gray stars */}
                                  <span className="text-gray-300">★</span>
                                  <span className="text-gray-300">★</span>
                                </div>
                              </div>

                              {/* Repeat the same for other sections */}
                              <div className="flex justify-between items-center mb-1 border-[0.64px] rounded p-2 bg-[#FFFFFF]">
                                <span className="text-sm text-[14px] font-medium text-[#004838]">
                                  Domain Knowledge
                                </span>
                                <div className="flex items-center">
                                  {/* 3 yellow stars */}
                                  <span className="text-yellow-500">★</span>
                                  <span className="text-yellow-500">★</span>
                                  <span className="text-yellow-500">★</span>
                                  {/* 2 gray stars */}
                                  <span className="text-gray-300">★</span>
                                  <span className="text-gray-300">★</span>
                                </div>
                              </div>

                              <div className="flex justify-between whitespace-normal border-[0.64px] rounded-lg bg-[#FFFFFF] p-2 items-center mb-1">
                                <span className="text-sm text-[14px] font-medium text-[#004838]">
                                  Domain Knowledge
                                </span>
                                <div className="flex items-center ">
                                  {/* 3 yellow stars */}
                                  <span className="text-yellow-500">★</span>
                                  <span className="text-yellow-500">★</span>

                                  {/* 2 gray stars */}
                                  <span className="text-gray-300">★</span>
                                  <span className="text-gray-300">★</span>
                                  <span className="text-gray-300">★</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>

                      {/* status */}
                      <td className="py-3 px-6 text-center relative">
                        <div
                          className={`font-medium cursor-pointer flex items-center ml-auto`}
                          onClick={() =>
                            setStatusDropdownIndex(
                              statusDropdownIndex === index ? null : index
                            )
                          }
                          style={{
                            backgroundColor:
                              item.status === "Shortlisted"
                                ? "#F0FFF8"
                                : item.status === "Waitlisted"
                                ? "#FEFFE5"
                                : item.status === "Rejected"
                                ? "#FFF0F0"
                                : "transparent",
                            color:
                              item.status === "Shortlisted"
                                ? "#28A745"
                                : item.status === "Waitlisted"
                                ? "#FFC107"
                                : item.status === "Rejected"
                                ? "#DC3545"
                                : "black",
                            padding: "8px 16px",
                            borderRadius: "12px",
                            border: "1px solid transparent",
                            width: "100px",
                            height: "31px",
                            margin: "3px",
                          }}
                        >
                          {item.status}
                          <AiOutlineDown
                            className="ml-1"
                            style={{
                              color:
                                item.status === "Shortlisted"
                                  ? "#28A745"
                                  : item.status === "Waitlisted"
                                  ? "#FFC107"
                                  : item.status === "Rejected"
                                  ? "#DC3545"
                                  : "black",
                            }}
                          />
                        </div>

                        {statusDropdownIndex === index && (
                          <div className="absolute mt-2 w-36 bg-white shadow-lg rounded-md z-50">
                            <div
                              className="py-2 px-4 hover:bg-gray-100 cursor-pointer font-medium text-green-700 rounded-md"
                              onClick={() =>
                                handleStatusChange(index, "Shortlisted")
                              }
                            >
                              Shortlisted
                            </div>
                            <hr />
                            <div
                              className="py-2 px-4 hover:bg-gray-100 cursor-pointer font-medium text-yellow-400 rounded-md"
                              onClick={() =>
                                handleStatusChange(index, "Waitlisted")
                              }
                            >
                              Waitlisted
                            </div>
                            <hr />
                            <div
                              className="py-2 px-4 hover:bg-gray-100 cursor-pointer font-medium text-red-600 rounded-md"
                              onClick={() =>
                                handleStatusChange(index, "Rejected")
                              }
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
                          className="cursor-pointer inline-flex items-center px-2 py-2 text-Routecho bg-white border border-inp rounded-lg
                           shadow-sm text-sm font-medium hover:bg-blue-100"
                        >
                          <IoDocumentOutline className="w-[18px] h-[18px] mr-2" />
                          <span className="text-[12px] text-Routecho">
                            {" "}
                            Resume.pdf
                          </span>
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
                          {/* If showFullButton is false, show the FiMessageSquare icon */}
                          {activeItemId !== item.id ? (
                            <button
                              onClick={() => setActiveItemId(item.id)}
                              className="text-gray-500 hover:bg-gray-200 p-2 rounded-full flex justify-center items-center mt-4"
                            >
                              <CiStickyNote className="w-6 h-6 rounded-full text-lg inline-block items-center mr-2" />
                            </button>
                          ) : (
                            // If showFullButton is true, show the full button
                            <button
                              className="text-white font-medium mr-2 bg-Routecho rounded-3xl mt-4 px-4 py-2 w-[135px] h-[28px] flex items-center"
                              onClick={() => setShowNotePopup(true)}
                              style={{
                                borderTopLeftRadius: "9999px",
                                borderBottomLeftRadius: "0",
                                borderTopRightRadius: "9999px",
                                borderBottomRightRadius: "9999px",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                              }}
                            >
                              {/* Profile Image */}
                              <img
                                src={avat}
                                alt="Profile"
                                className="w-5 h-5 rounded-full inline-block -ml-2 mr-2"
                                style={{ verticalAlign: "middle" }}
                              />
                              {/* Button Text */}
                              <span
                                className="inline-block text-[13px] whitespace-nowrap"
                                style={{ verticalAlign: "middle" }}
                              >
                                Check the note
                              </span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            {/* Note Popup */}
            {showNotePopup && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-lg font-semibold">Candidate's Note</h2>
                  <textarea
                    className="border rounded-md p-2 w-full"
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    placeholder="Add your note here..."
                  />
                  <button
                    className="mt-4 text-green-500"
                    onClick={() => setShowNotePopup((prevState) => !prevState)}
                  >
                    Save
                  </button>
                  <button
                    className="mt-4 ml-2 text-red-500"
                    onClick={() => setShowNotePopup((prevState) => !prevState)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
