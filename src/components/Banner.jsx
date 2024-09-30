import React from 'react';
import { useState } from 'react';
import  bg1 from '../../public/banner/banner1.jpg'
import  bg2 from '../../public/banner/banner2.jpg'

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
   bg1, bg2 
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-full">
      <div className=" overflow-hidden w-full h-full rounded-lg ">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full h-full object-cover" />
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        ❮
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        ❯
      </button>
    </div>
  );
};

export default Banner;
