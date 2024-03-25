import React, { useState } from 'react';
import { differenceInDays, format } from 'date-fns';
import { FaCalendarAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

interface BookingProps {
    tour: {
        id: number;
        name: string;
        price_per_day: number;
        description: string;
        duration: string;
        group_size: number;
        age_category: string;
        languages: string[];
        pictures: string[];
        destinations: string[];
        attractions: string[];
        start_date: string;
        end_date: string;
    };
}

const BookingComponent: React.FC<BookingProps> = ({ tour }) => {
    const [adultTickets, setAdultTickets] = useState(1);
    const [childTickets, setChildTickets] = useState(0);
    const [seniorTickets, setSeniorTickets] = useState(0);
    const [addServicePerBooking, setAddServicePerBooking] = useState(false);
    const [addServicePerPerson, setAddServicePerPerson] = useState(false);

    if (!tour) {
        return <div>Loading...</div>;
    }

    const basePrice =
        tour.price_per_day * (adultTickets + childTickets + seniorTickets) +
        (childTickets * 0.2 * tour.price_per_day) +
        (seniorTickets * 0.1 * tour.price_per_day);

    const totalPrice = (addServicePerBooking ? basePrice + 50 : basePrice) +
        (addServicePerPerson ? (childTickets + seniorTickets) * 20 : 0);

    const startDate = new Date(tour.start_date);
    const endDate = new Date(tour.end_date);
    const durationInDays = differenceInDays(endDate, startDate) + 1;

    const minTotalPrice = tour.price_per_day * durationInDays;

    const handleAdultChange = (value: number) => {
        setAdultTickets(value);
    };

    const handleChildChange = (value: number) => {
        setChildTickets(value);
    };

    const handleSeniorChange = (value: number) => {
        setSeniorTickets(value);
    };

    const increment = (setter: React.Dispatch<React.SetStateAction<number>>) => {
        setter((prevValue) => prevValue + 1);
    };

    const decrement = (setter: React.Dispatch<React.SetStateAction<number>>) => {
        setter((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
    };

    const handleBookNowClick = () => {
        if (adultTickets === 0 && childTickets === 0 && seniorTickets === 0) {
            Swal.fire({
                title: 'Error',
                text: 'Please select at least one ticket',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        } else {
            let message = '<div style="text-align: center;">Tickets Booked:</div><br>';

            if (adultTickets > 0) {
                message += `<div>Adult Tickets: ${adultTickets}</div>`;
            }
            if (childTickets > 0) {
                message += `<div>Child Tickets: ${childTickets}</div>`;
            }
            if (seniorTickets > 0) {
                message += `<div>Senior Tickets: ${seniorTickets}</div>`;
            }

            message += `<div style="font-weight: bold; padding-top: 20px;">Total Price: $${totalPrice}</div>`;

            Swal.fire({
                title: 'Booking Information',
                html: message,
                icon: 'info',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div className="container mx-auto px-4 py-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">From: ${minTotalPrice}</h2>
            <div className="mb-4 p-4 border border-light_gray2 rounded-lg flex flex-row gap-5 justify-between">
                <div>
                    <div className="flex items-center">
                        <FaCalendarAlt className="inline-block mr-2 h-5 w-5" />
                        <p className="font-bold text-lg">From:</p>
                    </div>
                    <p>{format(startDate, 'MMMM dd, yyyy')}</p>
                </div>

                <div>
                    <div className="flex items-center">
                        <FaCalendarAlt className="inline-block mr-2 h-5 w-5" />
                        <p className="font-bold text-lg">To:</p>
                    </div>
                    <p>{format(endDate, 'MMMM dd, yyyy')}</p>
                </div>
            </div>

            <h2 className="text-xl font-bold mb-2">Tickets</h2>
            <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                    <label className="text-lg mr-2">Adult ${tour.price_per_day}</label>
                    <div className="ticket-counter flex flex-row items-center justify-between">
                        <button className="ticket-button bg-dark_blue px-4 rounded text-white text-center" onClick={() => decrement(setAdultTickets)}>-</button>
                        <div className="ticket-number text-center w-8">{adultTickets}</div>
                        <button className="ticket-button bg-dark_blue px-4 rounded text-white text-center" onClick={() => increment(setAdultTickets)}>+</button>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <label className="text-lg mr-2">Child ${(tour.price_per_day * 0.2)+tour.price_per_day}</label>
                    <div className="ticket-counter flex flex-row items-center justify-between">
                        <button className="ticket-button bg-dark_blue px-4 rounded text-white text-center" onClick={() => decrement(setChildTickets)}>-</button>
                        <div className="ticket-number text-center w-8">{childTickets}</div>
                        <button className="ticket-button bg-dark_blue px-4 rounded text-white text-center" onClick={() => increment(setChildTickets)}>+</button>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <label className="text-lg mr-2">Senior ${(tour.price_per_day * 0.1)+tour.price_per_day}</label>
                    <div className="ticket-counter flex flex-row items-center justify-between">
                        <button className="ticket-button bg-dark_blue px-4 rounded text-white text-center" onClick={() => decrement(setSeniorTickets)}>-</button>
                        <div className="ticket-number text-center w-8">{seniorTickets}</div>
                        <button className="ticket-button bg-dark_blue px-4 rounded text-white text-center" onClick={() => increment(setSeniorTickets)}>+</button>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <label className="text-xl font-bold">Additional Services:</label>
                <div className="flex flex-col gap-4 py-4">
                    <label htmlFor="addServiceBooking" className="mr-2">
                        <input
                            id="addServiceBooking"
                            type="checkbox"
                            checked={addServicePerBooking}
                            onChange={() => setAddServicePerBooking(!addServicePerBooking)}
                            className="mr-1 h-3 w-3"
                        />
                        Add Service per booking
                    </label>
                    <label htmlFor="addServicePerson">
                        <input
                            id="addServicePerson"
                            type="checkbox"
                            checked={addServicePerPerson}
                            onChange={() => setAddServicePerPerson(!addServicePerPerson)}
                            className="mr-1 h-3 w-3"
                        />
                        Add Service per person
                    </label>
                </div>

            </div>

            <p className="text-xl font-bold mb-4">Total Price: ${totalPrice}</p>

            <button className="bg-orange hover:bg-light_orange font-bold py-2 px-4 rounded text-white" onClick={handleBookNowClick}>
                Book Now
            </button>
        </div>
    );
};

export default BookingComponent;
