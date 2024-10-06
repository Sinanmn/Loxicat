import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // If using React Router for navigation

const LoadingAnimation = () => {
  const navigate = useNavigate(); // For navigation after animation

  useEffect(() => {
    // Redirect to the home page after 3 seconds (time for animation to finish)
    const timer = setTimeout(() => {
      navigate('/'); // Change '/home' to the route you want to navigate to
    }, 1000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex w-full justify-start items-center h-screen bg-white">
      <div className="flex w-full  h-full  overflow-hidden">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`w-48 h-full bg-blue-300 animate-slide ${index !== 0 ? 'ml-12' : ''}`}
            style={{
              clipPath: 'polygon(10% 0%, 60% 0%, 90% 50%, 60% 100%, 10% 100%, 40% 50%)',
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(450%);
          }
        }

        .animate-slide {
          animation: slide 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
