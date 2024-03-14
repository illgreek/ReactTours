// @ts-ignore
import Link from 'next/link';
import React from 'react';
import toursData from '../../../public/data/tours/tours-locations.json';
import Image from "next/image";

interface Tour {
    id: number;
    name: string;
    description: string;
    image: string;
}

const TrendingDestinations: React.FC = () => {
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
                <h2 className="text-2xl font-bold text-dark_blue">Trending Destinations</h2>
                <Link className="text-dark_blue" href="/trending-destinations" passHref>
                    See All
                </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 pb-4">
                {toursData.tours.map((tour: Tour) => (
                    <div key={tour.id} className="overflow-hidden flex flex-col items-left">
                        <Image src={tour.image} alt={tour.name} width='190' height='210' className="w-48 h-48 object-cover mb-2 rounded-lg" />
                        <h3 className="text-orange text-sm mb-1 ду">{tour.name}</h3>
                        <p className="text-dark_blue text-sm">{tour.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingDestinations;
