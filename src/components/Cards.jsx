import React from "react";
import bg from "../assets/images/bg1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import data from "../json data/CardsData.json";

const Cards = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <style>
        {`
          @keyframes heartbeat {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          ::selection {
            background-color: orange; /* Change to your desired selection color */
            color: white; /* Change text color if needed */
          }

          /* For Firefox */
          ::-moz-selection {
            background-color: orange; /* Change to your desired selection color */
            color: white; /* Change text color if needed */
          }
        `}
      </style>
      <div className="my-10 flex ">
        {data.map((service) => (
          <div key={service.id} className="group relative 
            border-2 shadow-xl p-3 h-[360px] w-[300px] overflow-hidden transition-all duration-300 hover:-translate-y-2">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-5 rounded-lg transition-transform duration-500 transform group-hover:scale-110 group-hover:translate-x-4"
              style={{ backgroundImage: `url(${bg})` }}
            />
            <div className="flex flex-col p-6 gap-5">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-full h-20 w-20"
                // style={{ animation: 'heartbeat 1s infinite' }} // Apply heartbeat animation
              />
              <h2 className="relative text-2xl font-bold hover:text-orange-500 z-10 cursor-pointer transition-all duration-300">
                {service.title}
              </h2>
              <p className="text-[#76767A] text-[17px] z-10">
                {service.description}
              </p>
              <span className="flex text-orange-500">
                <a href="#" className="relative underline hover:no-underline z-10">
                  Read More
                </a>
                <FaArrowRightLong className="mt-[6px] ml-3" />
              </span>
            </div>

            {/* Overlay */}
            <div className="rounded-t-[50%] absolute bottom-0 left-0 right-0 top-[97%] bg-orange-500 opacity-10 transition-all duration-500 transform group-hover:top-0 group-hover:rounded-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
