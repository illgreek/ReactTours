'use client';
import React, { useState, useEffect } from 'react';
import toursData from '../../public/data/tours/tours.json';
import TourCard from '../ui/tours/TourCard'; // Component for displaying a single tour
import Filters from '../ui/tours/Filters'; // Component for filters
import Pagination from '../ui/tours/Pagination'; // Component for pagination

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

function Page() {
    const [tours, setTours] = useState<Tour[]>(toursData.tours);
    const [filters, setFilters] = useState({
        price_per_day: '',
        duration: '',
        group_size: '',
        age_category: '',
        languages: '',
        destinations: '',
        attractions: '',
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [toursPerPage] = useState(6); // Number of tours per page

    // Handle filtering change
    const handleFilterChange = (filterName: string, value: string) => {
        setCurrentPage(1); // Reset to first page when filters change
        setFilters({ ...filters, [filterName]: value });
    };

    // Reset all filters and pagination
    const handleResetFilters = () => {
        setCurrentPage(1); // Reset to first page
        setFilters({
            price_per_day: '',
            duration: '',
            group_size: '',
            age_category: '',
            languages: '',
            destinations: '',
            attractions: '',
        });
        // Scroll to top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Filter tours based on filters
    const filteredTours = tours.filter((tour) => {
        const priceMatch = !filters.price_per_day || tour.price_per_day <= parseInt(filters.price_per_day);
        const durationMatch = !filters.duration || tour.duration === filters.duration;
        const groupSizeMatch = !filters.group_size || tour.group_size === parseInt(filters.group_size);
        const ageCategoryMatch = !filters.age_category || tour.age_category === filters.age_category;
        const languagesMatch = !filters.languages || tour.languages.includes(filters.languages);
        const destinationsMatch = !filters.destinations || tour.destinations.includes(filters.destinations);
        const attractionsMatch = !filters.attractions || tour.attractions.includes(filters.attractions);

        return (
            priceMatch &&
            durationMatch &&
            groupSizeMatch &&
            ageCategoryMatch &&
            languagesMatch &&
            destinationsMatch &&
            attractionsMatch
        );
    });

    // Update currentPage if it exceeds the available pages after filtering
    useEffect(() => {
        const maxPage = Math.ceil(filteredTours.length / toursPerPage);
        if (currentPage > maxPage) {
            setCurrentPage(maxPage);
        }
    }, [filteredTours, toursPerPage, currentPage]);

    // Pagination
    const indexOfLastTour = currentPage * toursPerPage;
    const indexOfFirstTour = indexOfLastTour - toursPerPage;
    const currentTours = filteredTours.slice(indexOfFirstTour, indexOfLastTour);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto py-8 flex">
            <div className="w-1/4 pr-4">
                <Filters tours={tours} onChange={handleFilterChange} onReset={handleResetFilters} />
            </div>
            <div className="w-3/4">
                {filteredTours.length === 0 ? (
                    <div className="text-center text-gray-600">No tours found.</div>
                ) : (
                    <>
                        <div className="grid grid-cols-1">
                            {currentTours.map((tour) => (
                                <TourCard key={tour.id} tour={tour} />
                            ))}
                        </div>
                        <Pagination
                            toursPerPage={toursPerPage}
                            totalTours={filteredTours.length}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default Page;

