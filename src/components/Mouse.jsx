import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import bg from "../../public/images2/bg.png";

const ArrowFollowMouse = () => {
  const [angle, setAngle] = useState(0);

  // Function to calculate angle between arrow and mouse
  const calculateAngle = (event) => {
    // Get the bounding box of the arrow container
    const arrow = document.getElementById('arrow-container');
    const rect = arrow.getBoundingClientRect();
    const arrowCenterX = rect.left + rect.width / 2;
    const arrowCenterY = rect.top + rect.height / 2;

    const deltaX = event.clientX - arrowCenterX;
    const deltaY = event.clientY - arrowCenterY;

    // Calculate the angle in radians and then convert to degrees
    const rad = Math.atan2(deltaY, deltaX);
    const deg = (rad * 180) / Math.PI;
    setAngle(deg);
  };

  useEffect(() => {
    window.addEventListener('mousemove', calculateAngle);

    return () => {
      window.removeEventListener('mousemove', calculateAngle);
    };
  }, []);

  return (
     <div className='w-full h-screen flex items-center'>
    <div
      className="relative w-[50%] h-auto flex px-8  items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        id="arrow-container"
        className="w-96 h-48 bg-no-repeat flex justify-start items-center"
      >
        <div
          className="text-[220px] transform origin-center"
          style={{ transform: `rotate(${angle + 180}deg)` }}  // Adjust rotation by 90 degrees if necessary
        >
          <FaArrowLeft />
        </div>
      </div>
    </div>
    </div>


  );
};

export default ArrowFollowMouse;
