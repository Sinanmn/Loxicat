import React, { useState } from 'react';
import { RiArrowDropRightLine } from "react-icons/ri";
import data from "../json data/ConstructionWorkMenu.json"; // Adjust the path if necessary

const ConstructionWork = () => {
  // State to keep track of the selected service
  const [selectedId, setSelectedId] = useState(1);

  // Find the corresponding image based on selectedId
  const selectedImage = data.images.find(image => image.id === selectedId);

  return (
    <div className="min-h-screen px-6 my-28 flex flex-col lg:flex-row justify-center">
      <div className=" w-full lg:w-[30%] flex flex-col gap-8  px-7">
        <div className='w-full h-auto flex flex-col gap-2 items-end'>
        {data.services.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedId(service.id)} // Set the selected service id on click
            className={`cursor-pointer flex py-2 items-center text-[16px] pl-5 gap-1 border-2 border-[#E2EBEF] bg-[#EEF4F8] w-[94%] h-[55px] transition-all duration-400 hover:border-l-[6px] hover:text-orange-500 hover:border-l-orange-500 ${
              selectedId === service.id ? 'border-l-[6px] text-orange-500 border-l-orange-500' : 'text-[#40496A]'
            }`}
          >
            <RiArrowDropRightLine className='text-[32px] mt-[1px]' />
            <p>{service.name}</p>
          </div>
        ))}
   
      </div>
      <div className='border w-[95%] h-auto flex flex-col gap-4 mx-[21px] bg-[#F4F5F8] p-7'>
        
        
        <div className=''>Brochure</div>
        <p>Please click</p>
        <div>download pdf</div>
        
        </div>
      </div>
      {/* Right side (70% on large screens, 100% on small screens) */}
      <div className="w-full lg:w-[55%] flex flex-col items-start gap-7">
        {selectedImage && (
          <img
            src={selectedImage.image}
            alt={`Service ${selectedImage.id}`}
            className="object-cover max-h-[500px] w-full" // Adjust styles as needed
          />
        )}
      </div>
    </div>
  );
};

export default ConstructionWork;
