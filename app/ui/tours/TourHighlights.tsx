// ui/tours/TourHighlights.tsx
import React from 'react';

interface TourHighlightsProps {
    listing: string[];
}

const TourHighlights: React.FC<TourHighlightsProps> = ({ listing }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Tour Highlights</h2>
            <ul className="mb-8 list-disc list-inside pl-6">
                {listing.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default TourHighlights;
