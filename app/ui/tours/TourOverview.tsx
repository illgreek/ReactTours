// ui/tours/TourOverview.tsx
import React from 'react';

interface TourOverviewProps {
    description: string;
    destinations: string[];
    attractions: string[];
}

const TourOverview: React.FC<TourOverviewProps> = ({ description, destinations, attractions }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
            <p className="mb-4">{description}</p>
        </div>
    );
};

export default TourOverview;
