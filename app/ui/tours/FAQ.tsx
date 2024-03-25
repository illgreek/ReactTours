import React, { useState } from 'react';
import faqData from '../../../public/data/tours/faq-data.json';

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0); // Початковий стан - перший елемент активний
    const faqItems = faqData;

    const toggleFAQ = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="faq">
            <h2 className="text-2xl font-bold mb-4">FAQ</h2>
            <div className="accordion">
                {faqItems.map((item, index) => (
                    <div key={index} className="rounded-lg border border-light_gray2 shadow mb-4">
                        <div
                            className={`flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg ${
                                activeIndex === index ? 'bg-orange' : ''
                            }`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{item.question}</span>
                            <div
                                className={`w-6 h-6 rounded-full ${
                                    activeIndex === index ? 'bg-orange' : 'bg-transparent_orange'
                                }`}
                            />
                        </div>
                        {activeIndex === index && (
                            <div className="p-4 bg-white rounded-lg">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
