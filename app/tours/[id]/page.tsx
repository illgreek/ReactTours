'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import toursData from '../../../public/data/tours/tours.json';
import TourRating from '../../ui/tours/TourRating';
import TourShare from '../../ui/tours/TourShare';
import TourGallery from '../../ui/tours/TourGallery';
import TourDetails from '../../ui/tours/TourDetails';
import Breadcrumbs from '../../ui/tours/Breadcrumbs';
import BookingComponent from '../../ui/tours/Booking';
import TourOverview from '../../ui/tours/TourOverview';
import TourHighlights from '../../ui/tours/TourHighlights';
import WhatsIncluded from '../../ui/tours/WhatsIncluded';
import Itinerary from '../../ui/tours/Itinerary';

interface TourProps {
    id: number;
    name: string;
    price_per_day: number;
    description: string;
    duration: string;
    listing: string[];
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

const TourPage: React.FC = () => {
    const pathname = usePathname();
    const id = parseInt(pathname.split('/').pop()!, 10);

    if (isNaN(id)) {
        return <div>Tour ID is not valid</div>;
    }

    const tour: TourProps | undefined = toursData.tours.find((tour) => tour.id === id);

    if (!tour) {
        return <div>Tour not found</div>;
    }

    return (
        <div className="container mx-auto py-8 px-8">
            {/* Breadcrumbs */}
            <Breadcrumbs tourName={tour.name} />

            <h1 className="text-2xl text-dark_blue font-bold">{tour.name}</h1>

            <div className="flex flex-row justify-between">
                {/* TourRating */}
                <TourRating />

                {/* TourShare */}
                <TourShare url={`https://example.com/tours/${tour.id}`} />
            </div>

            {/* Use TourGallery component */}
            <TourGallery pictures={tour.pictures} />

            <div className="flex flex-row justify-between gap-8">
                <div className="w-2/3">
                    {/* TourDetails */}
                    <TourDetails
                        duration={tour.duration}
                        groupSize={tour.group_size}
                        ageCategory={tour.age_category}
                        languages={tour.languages}
                    />

                    {/* Use TourOverview component */}
                    <TourOverview
                        description={tour.description}
                        destinations={tour.destinations}
                        attractions={tour.attractions}
                    />

                    {/* Use TourHighlights component */}
                    <TourHighlights listing={tour.listing} />

                    {/* Use WhatsIncluded component */}
                    <WhatsIncluded
                        included={tour.whatsIncluded}
                        notIncluded={tour.whatsNotIncluded}
                    />

                    {/* Use Itinerary component */}
                    <Itinerary itinerary={tour.itinerary} />
                </div>

                <div className="w-1/3 py-8">
                    {/* Booking */}
                    <BookingComponent tour={tour} />
                </div>
            </div>
        </div>
    );
};

export default TourPage;
