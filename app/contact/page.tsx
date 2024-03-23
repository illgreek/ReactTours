// pages/Contact.tsx

import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="container mx-auto">
            <div className=" bg-gray-100 py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto ">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange to-light_orange shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 px-8">
                        <div className="max-w-md mx-auto">
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <h2 className="text-3xl font-extrabold text-orange">Contact Us</h2>
                                    <p className="text-dark_blue">Thank you for your interest in WL Tours! Please fill out the form below to get in touch with us.</p>
                                </div>
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <h3 className="text-lg font-semibold text-dark_blue">Contact Information</h3>
                                    <p className="flex items-center text-dark_blue">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 mr-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="#EB662B"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 2a10 10 0 00-3.16 19.49L12 21l3.16-1.51A10 10 0 0012 2zm0 4a1 1 0 011 1v6a1 1 0 01-1 1h-1v2h2v2h-2v2h-2v-2H9v-2h2v-2H9a1 1 0 01-1-1V7a1 1 0 011-1z"
                                            />
                                        </svg>
                                        Address: 123 Main Street, Cityville, State, Country
                                    </p>
                                    <p className="flex items-center text-dark_blue">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 mr-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="#EB662B"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                        Phone: +1 (123) 456-7890
                                    </p>
                                    <p className="flex items-center text-dark_blue">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 mr-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="#EB662B"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                        Email: info@wltours.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;
