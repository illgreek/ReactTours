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
import AvailabilityCalendar from "../../ui/tours/AvailabilityCalendar";
import FAQ from "../../ui/tours/FAQ";
import YouMightAlsoLike from "@/app/ui/tours/YouMightAlsoLike";

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
    const location = window.location.href;
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

            <div className="flex sm:flex-row flex-col justify-between">
                {/* TourRating */}
                <TourRating />

                {/* TourShare */}
                <TourShare url={location} />
            </div>

            {/* Use TourGallery component */}
            <TourGallery pictures={tour.pictures} />

            <div className="flex lg:flex-row flex-col justify-between md:gap-8">
                <div className="lg:w-2/3 w-full">
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

                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 ">
                        {/* Use Itinerary component */}
                        <Itinerary itinerary={tour.itinerary} />

                        {/* Use AvailabilityCalendar component */}
                        <AvailabilityCalendar startDate={new Date(tour.start_date)} endDate={new Date(tour.end_date)} />
                    </div>

                    {/* Use FAQ component */}
                    <FAQ />


                </div>

                <div className="lg:w-1/3 w-full py-8">
                    {/* Booking */}
                    <BookingComponent tour={tour} />
                </div>

            </div>

            {/* Use YouMightAlsoLike component */}
            <YouMightAlsoLike />

        </div>
    );
};

export default TourPage;
