'use client';
import React, { useEffect, useState, useRef  } from 'react';
import Link from 'next/link';
import useExchangeRate from "../../../data/API-rates/useExchangeRate";
import Skeleton from './skeleton';
import getUserCurrencyCode from '../../../data/API-rates/getUserCurrencyCode';
import Image from "next/image";

const Header: React.FC = () => {
    const exchangeRate = useExchangeRate(); // получаем обменный курс
    const [userCurrencyCode, setUserCurrencyCode] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const fetchUserCurrencyCode = async () => {
            const currencyCode = await getUserCurrencyCode();
            setUserCurrencyCode(currencyCode);
        };

        fetchUserCurrencyCode();
    }, []);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-8">
                <div className="flex justify-between w-full lg:w-auto items-center space-x-4 gap-20">
                    <Link className="text-xl font-bold" href="/">
                        <Image width="100" height="100" src={"/logo.png"} alt={"logo"} />
                    </Link>

                    {/* Burger menu icon */}
                    <div className="block lg:hidden">
                        <button
                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="#05073C"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="#05073C"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Navigation links for larger screens */}
                    <nav className="hidden lg:flex items-center space-x-4 text-dark_blue gap-8">
                        <Link className="text-dark_blue hover:text-gray-700" href="/">
                            Home
                        </Link>
                        <Link className="text-dark_blue hover:text-gray-700" href="/tour">
                            Tour
                        </Link>
                        <Link className="text-dark_blue hover:text-gray-700" href="/destination">
                            Destination
                        </Link>
                        <Link className="text-dark_blue hover:text-gray-700" href="/contact">
                            Contact
                        </Link>
                    </nav>
                </div>

                {/* Menu for smaller screens */}
                <div className="lg:hidden">
                    {isMenuOpen && (
                        <div className="absolute top-16 right-0 bg-white shadow-md py-4 px-8">
                            <nav className="flex flex-col space-y-4">
                                <Link className="text-dark_blue hover:text-gray-700" href="/">
                                    Home
                                </Link>
                                <Link className="text-dark_blue hover:text-gray-700" href="/tour">
                                    Tour
                                </Link>
                                <Link className="text-dark_blue hover:text-gray-700" href="/destination">
                                    Destination
                                </Link>
                                <Link className="text-dark_blue hover:text-gray-700" href="/contact">
                                    Contact
                                </Link>
                            </nav>

                            {/* Exchange rate */}
                            {!exchangeRate || !userCurrencyCode ? (
                                <Skeleton />
                            ) : (
                                <div className="bg-orange font-bold py-2 px-4 rounded text-white pointer-events-none mt-4">
                                    1 USD = {exchangeRate?.conversion_rates[userCurrencyCode]} {userCurrencyCode}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Exchange rate for larger screens */}
                <div className="hidden lg:block">
                    {!exchangeRate || !userCurrencyCode ? (
                        <Skeleton />
                    ) : (
                        <button className="bg-orange font-bold py-2 px-4 rounded text-white pointer-events-none">
                            1 USD = {exchangeRate?.conversion_rates[userCurrencyCode]} {userCurrencyCode}
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
