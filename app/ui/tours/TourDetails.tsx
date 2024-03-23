import React from 'react';
import { FaClock, FaUsers, FaChild, FaLanguage } from 'react-icons/fa';

interface TourDetailsProps {
    duration: string;
    groupSize: number;
    ageCategory: string;
    languages: string[];
}

const TourDetails: React.FC<TourDetailsProps> = ({ duration, groupSize, ageCategory, languages }) => {
    return (
        <div className="flex flex-wrap gap-4 py-8 justify-between">
            <div className="flex items-center">
                <div className="bg-white rounded-xl p-4 mr-2">
                    <FaClock className="text-dark_blue h-5 w-5" />
                </div>

                <div className="flex flex-col justify-between">
                    <span className="text-dark_blue">Duration: </span>
                    <span className="text-gray">{duration}</span>
                </div>
            </div>
            <div className="flex items-center">
                <div className="bg-white rounded-xl p-4 mr-2">
                    <FaUsers className="text-dark_blue" />
                </div>
                <div className="flex flex-col justify-between">
                    <span className="text-dark_blue">Group size: </span>
                    <span className="text-gray">{groupSize}</span>
                </div>
            </div>
            <div className="flex items-center">
                <div className="bg-white rounded-xl p-4 mr-2">
                    <FaChild className="text-dark_blue" />
                </div>
                <div className="flex flex-col justify-between">
                    <span className="text-dark_blue">Age category: </span>
                    <span className="text-gray">{ageCategory}</span>
                </div>
            </div>
            <div className="flex items-center">
                <div className="bg-white rounded-xl p-4 mr-2">
                    <FaLanguage className="text-dark_blue" />
                </div>
                <div className="flex flex-col justify-between">
                    <span className="text-dark_blue">Languages: </span>
                    <span className="text-gray">{languages.join(', ')}</span>
                </div>
            </div>
        </div>
    );
};

export default TourDetails;
