import React, { useState, useEffect } from 'react';

interface ItineraryProps {
    itinerary: string[];
}

const Itinerary: React.FC<ItineraryProps> = ({ itinerary }) => {
    const [selectedDay, setSelectedDay] = useState<number | null>(0);

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

    return (
        <div className="md:my-8 mt-8">
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
                            ></span>
                            Day {index + 1}
                        </button>
                        {selectedDay === index && (
                            <div className="bg-gray-100 px-6 rounded-md">
                                <p>{day}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Itinerary;
