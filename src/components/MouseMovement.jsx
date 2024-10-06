import React, { useState } from 'react';

const MouseMovement = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false); // State to control visibility

  const handleMouseMove = (event) => {
    const boundingRect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - boundingRect.left;
    const offsetY = event.clientY - boundingRect.top;

    setPosition({
      x: Math.max(0, Math.min(offsetX, boundingRect.width - 144)),
      y: Math.max(0, Math.min(offsetY, boundingRect.height - 37)),
    });

    // Make the small div visible when inside the blue div
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    // Hide the small div when the mouse leaves the blue div
    setIsVisible(false);
  };

  const scrollAnimation = {
    position: 'absolute',
    whiteSpace: 'nowrap',
    animation: 'scroll 5s linear infinite',
  };

  const keyframes = `
    @keyframes scroll {
      0% {
        transform: translateX(150%);
      }
      100% {
        transform: translateX(-150%);
      }
    }
  `;

  return (
    <div>
      <div className='w-full h-screen bg-red-500'></div>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave} // Detect mouse leaving the blue div
        className="relative w-full h-screen bg-blue-500 cursor-pointer"
      >
        {/* Inline keyframes */}
        <style>{keyframes}</style>

        {isVisible && ( // Render the small div only if isVisible is true
          <div
            className="w-36 h-10 absolute"
            style={{ top: position.y - 37, left: position.x - 72 }} // Center the div around the mouse
          >
            <div className="bg-black text-white overflow-hidden w-full h-full rounded-full flex justify-center items-center relative">
              {/* Scrolling text with inline styles */}
              <p style={scrollAnimation}>View Case</p>
            </div>
          </div>
        )}
      </div>
      <div className='w-full h-screen bg-red-500'></div>
    </div>
  );
};

export default MouseMovement;
