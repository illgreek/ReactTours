import React from 'react';
import { differenceInDays, format } from 'date-fns';
import { FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from "next/image";

interface Tour {
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
    whatsIncluded: string[];
    whatsNotIncluded: string[];
    itinerary: string[];
}

interface TourCardProps {
    tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
    const truncateDescription = (text: string, limit: number) => {
        if (text.length <= limit) return text;
        return text.slice(0, limit) + '...';
    };

    const startDate = new Date(tour.start_date);
    const endDate = new Date(tour.end_date);
    const durationInDays = differenceInDays(endDate, startDate) + 1;

    return (
        <div className="border border-light_gray2 rounded-lg p-4 mb-8 flex bg-white">
            <div className="w-1/3 pr-4 flex flex-col justify-between">
                <Image
                    src={tour.pictures[0]}
                    alt={tour.name}
                    height="200"
                    width="300"
                    className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <div className="flex flex-wrap items-center">{
                    tour.destinations.map((destination, index) => (
                        <span key={index} className="text-orange text-sm mr-1 bg-transparent_orange rounded-full py-1 px-2">{destination}</span>
                    ))
                }</div>
            </div>
            <div className="w-1/3">
                <p className="text-gray-600 mb-2 text-sm">{tour.duration} | {tour.group_size} guests
                    | {tour.age_category}</p>
                <div className="text-gray-600 mb-2 text-sm">{tour.languages.join(', ')}</div>
                <h3 className="text-lg font-semibold mb-2">{tour.name}</h3>
                <p className="text-gray-600 text-lg font-bold mb-2">${tour.price_per_day} per day</p>
                <p className="text-gray-600 ">{truncateDescription(tour.description, 100)}</p>
            </div>
            <div className="w-1/3 flex flex-col justify-between items-center">
                <div>
                    <div className="flex items-center">
                        <FaCalendarAlt className="inline-block mr-2 h-5 w-5" />
                        <p className="font-bold text-lg">Start Date:</p>
                    </div>
                    <p>{format(startDate, 'MMMM dd, yyyy')}</p>
                </div>
                <div>
                    <div className="flex items-center">
                        <FaCalendarAlt className="inline-block mr-2 h-5 w-5" />
                        <p className="font-bold text-lg">End Date:</p>
                    </div>
                    <p>{format(endDate, 'MMMM dd, yyyy')}</p>
                </div>
                <Link className="bg-orange hover:bg-transparent_orange text-white px-4 py-2 rounded-lg" href={`/tours/${tour.id}`}>
                        View Details
                </Link>
            </div>
        </div>
    );
};

export default TourCard;
