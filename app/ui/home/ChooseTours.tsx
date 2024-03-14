import React from 'react';
import whyChooseData from '../../../public/data/tours/choose-tour.json'
import Image from "next/image";

interface Card {
    id: number;
    icon: string;
    title: string;
    text: string;
}

const ChooseTours: React.FC = () => {
    return (
        <div className="container mx-auto py-8 px-8">
            <h2 className="text-2xl font-bold text-center text-dark_blue mb-8">Why Choose WL Tours</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {whyChooseData.cards.map((card: Card) => (
                    <div key={card.id} className="bg-white rounded-lg p-6">
                        <div className="flex items-center justify-center mb-4">
                            <Image src={`${card.icon}`} alt={card.title} width='100' height='100' className="w-12 h-12" />
                        </div>
                        <h3 className="text-xl text-orange text-center font-semibold mb-4">{card.title}</h3>
                        <p className="text-dark_blue text-center">{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChooseTours;
