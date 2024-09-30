import React, { useState, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";
import { PiMagnifyingGlass } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // New state for sliding div


  const toggleDiv = (e) => {
    e.stopPropagation(); // Prevent click from propagating
    if (!showDiv) {
      setShowDiv(true);
      // Wait briefly before setting `isVisible` to trigger animation
      setTimeout(() => {
        setIsVisible(true);
      }, 100); // Adjust the delay as needed for smooth animation
    } else {
      setIsVisible(false); // Hide div immediately
      setTimeout(() => {
        setShowDiv(false); // Hide the div after the animation completes
      }, 300); // Should match transition duration for smooth hiding
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDiv && !event.target.closest('.dropdown')) {
        setIsVisible(false);
        setTimeout(() => {
          setShowDiv(false);
        }, 300);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDiv]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      {/* Bottom Navigation Bar */}
      <nav className="bg-[#F5F5F5] h-[99px]">
        <div className="relative h-full container mx-auto flex justify-around items-center gap-36">
          {/* Left Navigation Links */}
          <ul className="flex space-x-6 h-full text-[17px] font-bold">
            <li className="h-full flex items-center hover:text-orange-500 transition-all duration-200 ease-linear cursor-pointer">
              Home
            </li>

            <li className="h-full flex items-center hover:text-orange-500 transition-all duration-200 ease-linear cursor-pointer">
              About
            </li>

            {/* Page Dropdown */}
            <li className="h-full flex items-center hover:text-orange-500 transition-all duration-200 ease-linear cursor-pointer relative group/up gap-2">
              Page
              <SlArrowDown className="text-[9px] mt-[1px]" />
              {/* First Dropdown (shows on Page hover) */}
              <ul className="text-black text-sm absolute top-full left-0 hidden group-hover/up:block bg-[#F5F5F5] w-52">
                <li className="relative group/down block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all hover:pl-7 duration-300 ease-in-out border-b-2">
                  Our Team
                  {/* Nested Dropdown (shows on Header Styles hover) */}
                  <ul className="text-sm border-2 absolute hidden group-hover/down:block bg-[#F5F5F5] w-52 top-0 left-full">
                    <li className="px-4 py-4 hover:bg-orange-500 text-black hover:text-white transition-all duration-300 hover:pl-7 ease-in-out border-b-2">
                      All Members
                    </li>
                    <li className="px-4 py-4 hover:bg-orange-500 text-black hover:text-white transition-all duration-300 hover:pl-7 ease-in-out border-b-2">
                      Team Details
                    </li>
                  </ul>
                </li>

                {/* Other menu items */}
                <li className="hover:pl-7 block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  Pricing
                </li>
                <li className="hover:pl-7 block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  Testimonials
                </li>
                <li className="hover:pl-7 block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  Contact Us
                </li>
                <li className="hover:pl-7 block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  FAQs
                </li>
              </ul>
            </li>

            {/* Services Dropdown */}
            <li className="gap-2 h-full flex items-center hover:text-orange-500 transition-all duration-200 ease-linear cursor-pointer relative group">
              Services
              <SlArrowDown className="text-[9px] mt-[1px]" />
              <ul className="text-black text-sm absolute top-full left-0 hidden group-hover:block bg-[#F5F5F5] w-52">
                <li className="hover:pl-7 block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  All Services
                </li>
                <li className="hover:pl-7 block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  Construction Works
                </li>
                <li className="hover:pl-7 block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  Industrial Service
                </li>
                <li className="hover:pl-7 block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  Chemical Research
                </li>
                <li className="hover:pl-7 block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  Material Supply
                </li>
                <li className="hover:pl-7 block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  Mechanical Works
                </li>
                <li className="hover:pl-7 block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  Welding Services
                </li>
              </ul>
            </li>

            {/* Projects Dropdown */}
            <li className="gap-2 h-full flex items-center hover:text-orange-500 transition-all duration-200 ease-linear cursor-pointer relative group">
              Projects
              <SlArrowDown className="text-[9px] mt-[1px]" />
              <ul className="text-black text-sm absolute top-full left-0 hidden group-hover:block bg-[#F5F5F5] w-52">
                <li className="hover:pl-7 block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  All Projects
                </li>
                <li className="hover:pl-7 block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  Single Project
                </li>
              </ul>
            </li>

            {/* News Dropdown */}
            <li className="gap-2 h-full flex items-center hover:text-orange-500 transition-all duration-200 ease-linear cursor-pointer relative group">
              News
              <SlArrowDown className="text-[9px] mt-[1px]" />
              <ul className="text-black text-sm absolute top-full right-0 hidden group-hover:block bg-[#F5F5F5] w-52">
                <li className="hover:pl-7 block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  News Classic
                </li>
                <li className="hover:pl-7 block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  News Left Sidebar
                </li>
                <li className="hover:pl-7 block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  News Right Sidebar
                </li>
                <li className="hover:pl-7 block px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  Single News
                </li>
              </ul>
            </li>
          </ul>

          {/* Right Search and Menu Icons */}
          <div className="dropdown">
            <div className="flex gap-4 space-x-4">
              <button className="text-orange-600" onClick={toggleDiv}>
                <PiMagnifyingGlass size={25} />
              </button>
              <button className="group text-orange-600 h-10 w-10" onClick={toggleSidebar}>
                <div className="h-full w-[90%] flex flex-col justify-center gap-[5px] items-end">
                  <div className="bg-orange-500 h-[2px] w-[30%] group-hover:w-full transition-all ease-in-out duration-300"></div>
                  <div className="bg-orange-500 h-[2px] w-[50%] group-hover:w-full transition-all ease-in-out duration-300"></div>
                  <div className="bg-orange-500 h-[2px] w-[40%] group-hover:w-full transition-all ease-in-out duration-300"></div>
                </div>
              </button>
            </div>
            {showDiv && (
              <div
                className={`border-orange-500 border-[1px] bg-[#F4F4F4] absolute top-full right-32 py-3 w-[20%] flex justify-center items-center transition-all duration-700 ease-in-out ${
                  isVisible ? "mt-0" : "mt-20"
                }`}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="relative px-2 py-2 w-[90%] outline-none text-orange-500"
                />
                <PiMagnifyingGlass
                  size={20}
                  className="absolute right-10 text-orange-500"
                />
              </div>
            )}
          </div>



          





        </div>


{/* Sliding Div */}
<div
          className={`z-50 absolute top-0 right-0 h-full flex flex-col gap-5 bg-white w-[25%] transition-transform duration-500 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full h-auto p-10  right-2 ">
           <button
              onClick={toggleSidebar}
              className="h-10 w-10 rounded-full flex justify-center items-center text-4xl text-white cursor-pointer bg-orange-500"
            >
              <RxCross2 />

            </button>
            </div>
           
          <div className="p-4 text-black">
            <h2 className="text-2xl font-bold mb-4">Sidebar Content</h2>
            <p>This is the content of the sliding sidebar.</p>
           
          </div>
          
        </div>


      </nav>
    </header>
  );
};

export default Navbar;
