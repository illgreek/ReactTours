// ui/tours/WhatsIncluded.tsx
import React from 'react';

interface WhatsIncludedProps {
    included: string[];
    notIncluded: string[];
}

const WhatsIncluded: React.FC<WhatsIncludedProps> = ({ included, notIncluded }) => {
    return (
        <div className="grid grid-cols-2 gap-8">
            <div>
                <h2 className="text-2xl font-bold mb-4">Whats Included</h2>
                <ul className="list-disc list-inside">
                    {included.map((item, index) => (
                        <li key={index} className="flex items-center mb-2">
                            <span className="inline-block w-4 h-4 rounded-full bg-light_green mr-2" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4">Whats Not Included</h2>
                <ul className="list-disc list-inside">
                    {notIncluded.map((item, index) => (
                        <li key={index} className="flex items-center mb-2">
                            <span className="inline-block w-4 h-4 rounded-full bg-light_red mr-2" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WhatsIncluded;
