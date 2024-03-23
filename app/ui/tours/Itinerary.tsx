import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

interface ItineraryProps {
    itinerary: string[];
}

const Itinerary: React.FC<ItineraryProps> = ({ itinerary }) => {
    const [selectedDay, setSelectedDay] = useState<number | null>(0); // Змінено початковий стан на 0

    useEffect(() => {
        setSelectedDay(0);
    }, []);

    const handleDayClick = (dayIndex: number) => {
        if (selectedDay === dayIndex) {
            setSelectedDay(null);
        } else {
            setSelectedDay(dayIndex);
        }
    };

    // Анімація для зникаючого/появляючого контенту
    const fadeAnimations: { [key: number]: any } = {};
    itinerary.forEach((_, index) => {
        fadeAnimations[index] = useSpring({
            opacity: selectedDay === index ? 1 : 0,
            marginTop: selectedDay === index ? 0 : -20,
            config: { duration: 300 },
        });
    });

    // Анімація для відкриття/закриття дня
    const slideAnimations: { [key: number]: any } = {};
    itinerary.forEach((_, index) => {
        slideAnimations[index] = useSpring({
            height: selectedDay === index ? 'auto' : 0,
            config: { duration: 300 },
        });
    });

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold">Itinerary</h2>
            <div className="">
                {itinerary.map((day, index) => (
                    <div key={index}>
                        <button
                            className={`flex flex-row items-center w-full text-left bg-gray-200 hover:bg-gray-300 focus:bg-gray-300  py-4 rounded-md ${
                                selectedDay === index ? 'font-bold' : ''
                            }`}
                            onClick={() => handleDayClick(index)}
                        >
                            <span
                                className={`inline-block w-4 h-4 mr-2 rounded-full ${selectedDay === index ? 'bg-orange' : 'border-orange border-2'}`}
                            ></span> {/* Orange dot */}
                            Day {index + 1}
                        </button>
                        <animated.div style={slideAnimations[index]} className="overflow-hidden">
                            {selectedDay === index && (
                                <animated.div style={fadeAnimations[index]} className="bg-gray-100 px-6 rounded-md">
                                    <p>{day}</p>
                                </animated.div>
                            )}
                        </animated.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Itinerary;
