import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import toursData from '../../../public/data/tours/top-attractions.json';
import Image from 'next/image';

interface Tour {
    id: number;
    name: string;
    description: string;
    image: string;
}

const TravelAtt: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState<Tour[]>([]);

    useEffect(() => {
        setTours(toursData.tours);
        setLoading(false);
    }, []);

    const Skeleton: React.FC = () => {
        return (
            <div className="flex items-center justify-center h-20 w-full rounded overflow-hidden animate-pulse bg-light_gray">
                <div className="h-20 w-20 mr-4 bg-gray-300 animate-pulse"></div>
                <div className="flex-1">
                    <div className="h-4 w-24 mb-2 bg-gray-300 animate-pulse"></div>
                    <div className="h-4 w-32 bg-gray-300 animate-pulse"></div>
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto py-8 px-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-dark_blue">Trending Attractions</h2>
                <Link className="text-dark_blue" href="/trending-destinations" passHref>
                    See All
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-4">
                {loading ? (
                    // Если данные загружаются, отображаем скелетоны
                    Array.from({ length: 9 }).map((_, index) => (
                        <Skeleton key={index} />
                    ))
                ) : (
                    // Иначе, отображаем карточки
                    tours.map((tour: Tour) => (
                        <div key={tour.id} className="flex flex-row items-left gap-4">
                            <Image src={tour.image} alt={tour.name} width="100" height="100" className="w-20 h-20 object-cover mb-2 rounded-lg" />
                            <div className="flex flex-col items-left justify-center">
                                <h3 className="text-orange text-sm mb-1">{tour.name}</h3>
                                <p className="text-dark_blue text-sm">{tour.description}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TravelAtt;
