import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import toursData from '../../../public/data/tours/tours.json';
import Image from 'next/image';

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
}

const YouMightAlsoLike: React.FC = () => {
    const [limitedTours, setLimitedTours] = useState<Tour[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTours = async () => {
            // Assume fetching data from an API, for now, using the toursData
            // from the imported JSON
            const fetchedTours = toursData.tours.slice(0, 4);
            setLimitedTours(fetchedTours);
            setLoading(false);
        };

        fetchTours();
    }, []);

    const trimDescription = (description: string) => {
        const maxLength = 100;
        if (description.length > maxLength) {
            return `${description.slice(0, maxLength)}...`;
        }
        return description;
    };

    if (loading) {
        return (
            <div className="relative container mx-auto">
                <div className="container mx-auto py-8">
                    <h2 className="text-2xl font-bold text-dark_blue mb-4">You might also like...</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow">
                                <div className="h-40 bg-gray-300 animate-pulse"></div>
                                <div className="p-4">
                                    <div className="h-6 bg-gray-300 animate-pulse mb-2"></div>
                                    <div className="h-4 bg-gray-300 animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative container mx-auto">
            <div className="container mx-auto py-8">
                <h2 className="text-2xl font-bold text-dark_blue mb-4">You might also like...</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {limitedTours.map((tour: Tour) => (
                        <div key={tour.id} className="bg-white rounded-lg overflow-hidden shadow">
                            <Link href={`/tours/${tour.id}`}>
                                    <Image src={tour.pictures[0]} alt={tour.name} width={300} height={200} className="w-full h-40 object-cover" />
                                    <div className="p-4">
                                        <h3 className="text-lg font-bold text-dark_blue mb-2">{tour.name}</h3>
                                        <div className="flex justify-between mt-4 border-t border-light_gray pt-4">
                                            <p className="text-dark_blue">{tour.duration}</p>
                                            <p className="text-dark_blue">${tour.price_per_day} per day</p>
                                        </div>
                                    </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default YouMightAlsoLike;
