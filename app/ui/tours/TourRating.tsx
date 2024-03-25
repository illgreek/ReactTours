import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const RatingAndBookings: React.FC = () => {
    const [rating, setRating] = useState<number>(0);
    const [bookings, setBookings] = useState<number>(0);

    useEffect(() => {
        const randomRating = (Math.random() * (5.0 - 4.0) + 4.0).toFixed(1);
        setRating(parseFloat(randomRating));

        const randomBookings = Math.floor(Math.random() * 1000) + 1;
        setBookings(randomBookings);
    }, []);

    return (
        <div className="my-4 flex flex-row sm:gap-8 gap-2">
            <p className="text-dark_blue text-sm sm:text-regular">Rating:
                <CountUp className="pl-2" start={0} end={rating} decimals={1} duration={1.5} />
            </p>
            <p className="text-dark_blue text-sm sm:text-regular">Bookings:
                <CountUp className="pl-2" start={0} end={bookings} duration={1.5} />
            </p>
        </div>
    );
};

export default RatingAndBookings;
