"use client";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../components/css/Button.css";
import { FaCircleArrowRight } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const Slideshow = () => {
  const sliderLeftRef = useRef(null);
  const sliderRightRef = useRef(null);
  const sliderRef = useRef(null); // Small device slider ref

  useEffect(() => {
    const handleMouseWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        // Scroll down
        sliderLeftRef.current.slickNext();
        sliderRightRef.current.slickPrev(); // Sync reverse slider
      } else {
        // Scroll up
        sliderLeftRef.current.slickPrev();
        sliderRightRef.current.slickNext(); // Sync reverse slider
      }
    };

    // Add event listener for mouse wheel
    window.addEventListener("wheel", handleMouseWheel);

    return () => {
      window.removeEventListener("wheel", handleMouseWheel);
    };
  }, []);

  const handleNextSlide = () => {
    sliderLeftRef.current.slickNext();
    sliderRightRef.current.slickPrev(); // Sync reverse slider
  };

  const handlePrevSlide = () => {
    sliderLeftRef.current.slickPrev();
    sliderRightRef.current.slickNext(); // Sync reverse slider
  };

  // Handler for the small device slider arrow
  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Move to next slide
    } else {
      console.log("Slider reference is not available");
    }
  };
//   const handleClick = () => {
//     handleNextSlide();
//   };
const handleNextSlides = () => {
    if (sliderLeftRef.current && sliderRightRef.current) {
      console.log("Moving to next slide!");
      sliderLeftRef.current.slickNext(); // Move to the next slide on the left
      sliderRightRef.current.slickPrev(); // Move to the previous slide on the right
    } else {
      console.log("Slider refs are not available!");
    }
  };

const handleClick = () => {
    console.log("Button clicked!"); // Check if this logs when the button is clicked.
    handleNextSlides();
  };
  


  const settingsLeft = {
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    infinite: true,
    dots: false,
    speed: 1000,
  };

  const settingsRight = {
    swipe: false,
    vertical: true,
    arrows: false,
    infinite: true,
    speed: 950,
  };

  // Small device slider settings
  const smallSlider = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: false,
    rtl: true,
    pauseOnHover: false,
  };

  return (
    <div>
      <div className="hidden md:block">
        <div className="relative z-[110] h-screen w-screen overflow-hidden bg-[#110101] ">
          {/* Left Slideshow (Top-Down) */}
          <div className="absolute inset-0 z-10 slideshow slideshow-left">
            <Slider {...settingsLeft} ref={sliderLeftRef}>
              <div className="item h-screen">
                <div className="left-half">
                  <img
                    src="https://i.postimg.cc/TPv19Qx1/mark-active-school.jpg"
                    className="object-cover w-full h-full"
                    alt="slide-1"
                  />
                </div>
              </div>

              <div className="item h-screen">
                <div className="left-half">
                  <img
                    src="https://i.postimg.cc/g2bv6z1C/4.jpg"
                    className="object-cover w-full h-full"
                    alt="slide-2"
                  />
                </div>
              </div>
              <div className="item h-screen">
                <div className="left-half">
                  <img
                    src="https://i.postimg.cc/WzW1pVyH/chips.png"
                    className="object-cover w-full h-full"
                    alt="slide-3"
                  />
                </div>
              </div>
              <div className="item h-screen">
                <div className="left-half">
                  <img
                    src="https://i.postimg.cc/X7CfJG1K/2.jpg"
                    className="object-cover w-full h-full"
                    alt="slide-4"
                  />
                </div>
              </div>
            </Slider>

            {/* Left Side Button */}
            
          </div>

          {/* Right Slideshow (Bottom-Up) */}
          <div className="absolute inset-0 z-10 slideshow slideshow-right right-0">
            <Slider {...settingsRight} ref={sliderRightRef}>
              <div className="item h-screen">
                <div className="right-half">
                  <img
                    src="https://i.postimg.cc/TPv19Qx1/mark-active-school.jpg"
                    className="object-cover w-full h-full"
                    alt="slide-4-reverse"
                  />
                </div>
              </div>
              <div className="item h-screen">
                <div className="right-half">
                  <img
                    src="https://i.postimg.cc/X7CfJG1K/2.jpg"
                    className="object-cover w-full h-full"
                    alt="slide-1-reverse"
                  />
                </div>
              </div>
              <div className="item h-screen">
                <div className="right-half">
                  <img
                    src="https://i.postimg.cc/WzW1pVyH/chips.png"
                    className="object-cover w-full h-full"
                    alt="slide-2-reverse"
                  />
                </div>
              </div>
              <div className="item h-screen">
                <div className="right-half">
                  <img
                    src="https://i.postimg.cc/g2bv6z1C/4.jpg"
                    className="object-cover w-full h-full"
                    alt="slide-3-reverse"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <button
              className="absolute bottom-10  left-5 z-[9999] cursor-pointer"
              onClick={handleClick}
            >
              <BsArrowRight
                className="text-3xl lg:text-6xl text-[#125b5c] bg-white p-3 rounded-full "
                // Trigger next slide
              />
            </button>

      </div>

      {/* Small device */}
      <div className="bg-white relative z-[110]">
        <div className="md:hidden mt-[550px]">
          <Slider ref={sliderRef} {...smallSlider}>
            <div className="item h-[450px]">
              <img
                src="https://i.postimg.cc/TPv19Qx1/mark-active-school.jpg"
                className="h-full w-full"
                alt="slide-1"
              />
            </div>

            <div className="item h-[450px]">
              <img
                src="https://i.postimg.cc/g2bv6z1C/4.jpg"
                className="h-full w-full"
                alt="slide-2"
              />
            </div>

            <div className="item h-[450px]">
              <img
                src="https://i.postimg.cc/WzW1pVyH/chips.png"
                className="h-full w-full"
                alt="slide-3"
              />
            </div>

            <div className="item h-[450px]">
              <img
                src="https://i.postimg.cc/X7CfJG1K/2.jpg"
                className="h-full w-full"
                alt="slide-4"
              />
            </div>
          </Slider>

          {/* Custom Arrow for Small Devices */}
          {/* <div
            className="absolute left-4 bottom-4 p-1.5 bg-white text-black rounded-full cursor-pointer"
            onClick={handleNextClick} // Trigger next slide
          >
            <LiaLongArrowAltRightSolid className="text-4xl" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
