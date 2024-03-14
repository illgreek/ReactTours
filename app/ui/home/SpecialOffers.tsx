// @ts-ignore
import Link from 'next/link';
import React from 'react';

interface Tour {
    id: number;
    name: string;
    description: string;
    image: string;
}

interface Props {
    tours: Tour[];
}

const SpecialOffers: React.FC<Props> = ({ tours }) => {
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
                <h2 className="text-2xl font-bold text-dark_blue">Special Offers</h2>
                <Link className="text-dark_blue" href="/special-offers">
                    See All
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                {tours.slice(0, 4).map((tour) => (
                    <div key={tour.id} className="overflow-hidden flex gap-4">
                        <img src={tour.image} alt={tour.name} className="w-20 h-20 object-cover" />
                        <div className=" w-2/3">
                            <h3 className="text-orange text-sm mb-2">{tour.name}</h3>
                            <p className="text-dark_blue text-sm">{tour.description}</p>
                        </div>
                    </div>
                ))}
                {/* Skeleton loaders for remaining cards */}
                {Array.from({ length: 4 - tours.length }).map((_, index) => (
                    <Skeleton key={`skeleton-${index}`} />
                ))}
            </div>
        </div>
    );
};

export default SpecialOffers;
