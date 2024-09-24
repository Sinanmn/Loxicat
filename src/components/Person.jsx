import React from "react";
import { useSpring, animated } from "react-spring";
import data from "../json data/PersonData.json";

const Person = () => {
  const { bg1, bg2, bg3, title, heading, paragraph, services } = data;

  // Animation for the main content
  const contentSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <div className="h-screen relative">
      <img
        src={bg3} // Background pattern
        className="absolute inset-0 object-cover h-full w-full"
      />
      <img
        src={bg1} // Orange background
        className=" z-10 absolute left-0 top-[20%] h-[70%] w-full bg-orange-500 "
      />

      <div className=" z-30 absolute left-0 top-[10%] h-[80%] w-full px-0 md:px-7 lg:px-10">
        <div className=" h-full w-full flex justify-center gap-8 md:gap-20">
          <div className="my-[10px] shadow-[rgba(0,0,0,0.2)_3px_3px_10px_1px,_rgba(0,0,0,0.2)_-3px_-3px_10px_1px] z-30 bg-white flex items-center justify-center h-[90%] w-[90%] max-w-[650px] p-4">
            <div className="h-full w-full flex flex-col p-4 gap-4">
              <p className="text-orange-500 underline text-lg">{title}</p>
              <h2 className="text-[#0C2239] text-[45px] font-bold mb-2">{heading}</h2>
              <p className="leading-relaxed text-[#686A70]">{paragraph}</p>
              {services.map((service, index) => (
                <ServiceBar key={index} service={service} />
              ))}
            </div>
          </div>

          <img
            src={bg2} // Person image
            className="hidden lg:block md:h-[100%] lg:h-[100%] object-cover z-30"
          />
        </div>
      </div>
    </div>
  );
};

const ServiceBar = ({ service }) => {
  const [percentage, setPercentage] = React.useState(0);

  // Animate the percentage
  React.useEffect(() => {
    let start = 50; // Start from 0 for animation
    const end = service.percentage;
    const duration = 2000; // Duration in milliseconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const increment = () => {
      start += 1;
      setPercentage(start);
      if (start < end) {
        setTimeout(increment, stepTime);
      }
    };

    increment();
  }, [service.percentage]);

  return (
    <div>
      <div className="flex justify-between">
        <h4>{service.name}</h4>
        <span>{percentage}%</span>
      </div>
      <div
        className="flex items-center"
        style={{
          width: "100%",
          backgroundColor: "#e0e0e0",
          height: "12px",
          marginBottom: "7px",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            backgroundColor: "#ff7f00",
            height: "50%",
          }}
        ></div>
        <div className="h-full w-[1px] bg-orange-500"></div>
      </div>
    </div>
  );
};

export default Person;
