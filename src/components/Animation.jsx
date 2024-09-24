import React, { useEffect, useState, useRef } from 'react';

const Card = () => {
    return (
        <div className="hover:text-white text-gray-400 border-2 w-96 h-screen hover:bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-lg">
            Card
        </div>
    );
};

const Animation = () => {
    const [offset, setOffset] = useState(0);
    const totalCards = 6; // Total number of cards
    const visibleCards = 3; // Number of full cards visible
    const cardWidth = 384; // Width of each card (adjusted for your preference)
    const cardMargin = 8; // Margin around each card (m-2 gives 8px margin)
    const containerWidth = (cardWidth + cardMargin) * totalCards; // Total width of the card container
    const screenWidth = window.innerWidth;
    const maxOffset = -(containerWidth - screenWidth); // Maximum scroll value, adjusted to stop at the last card

    const targetOffset = useRef(0); // Ref to store the target offset for smoother transition
    const isMoving = useRef(false); // To track whether the mouse is moving
    const animationFrameId = useRef(null); // To store the requestAnimationFrame ID

    const handleMouseMove = (e) => {
        const { clientX } = e;
        const screenWidth = window.innerWidth;

        // Calculate the scroll range based on mouse position
        const newOffset = ((clientX / screenWidth) * (totalCards - visibleCards)) * -(cardWidth + cardMargin);

        // Prevent scrolling past the last card
        targetOffset.current = Math.max(maxOffset, Math.min(0, newOffset));

        // Indicate that the mouse is moving
        isMoving.current = true;

        // Cancel any ongoing animation to avoid multiple frames being requested
        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }

        // Start the animation
        animate();
    };

    const animate = () => {
        setOffset((prevOffset) => {
            const diff = targetOffset.current - prevOffset;
            if (Math.abs(diff) > 0.1) {
                return prevOffset + diff * 0.1; // Smooth easing
            } else {
                return targetOffset.current; // Stop updating when close to target
            }
        });

        if (isMoving.current) {
            animationFrameId.current = requestAnimationFrame(animate);
        }
    };

    useEffect(() => {
        let mouseStopTimeout;

        const stopMoving = () => {
            // Set mouse moving to false after a delay when mouse stops
            mouseStopTimeout = setTimeout(() => {
                isMoving.current = false;
            }, 100); // Wait for 100ms to confirm the mouse has stopped
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousemove', stopMoving);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousemove', stopMoving);
            if (mouseStopTimeout) {
                clearTimeout(mouseStopTimeout);
            }
        };
    }, [screenWidth]);

    return (
        <div className="overflow-hidden h-screen flex">
            <div
                className="flex transition-transform duration-300"
                style={{
                    transform: `translateX(${offset}px)`,
                    width: `${containerWidth}px`, // Set the total width for the card container
                }}
            >
                {[...Array(totalCards)].map((_, index) => (
                    <Card key={index} />
                ))}
            </div>
        </div>
    );
};

export default Animation;
