import React from 'react';

const BookNow: React.FC = () => {
    return (
        <div className="container mx-auto py-8 px-8">
            <div className="flex justify-between items-center lg:flex-row flex-col px-14 py-12 bg-orange rounded-xl gap-4">
                <h2 className="text-xl text-white text-center">Early Booking Discounts Up To 50%!</h2>
                <button className="bg-white hover:bg-light_gray text-orange font-bold py-4 px-6 rounded">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default BookNow;