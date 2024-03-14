"use client";

import React, { useEffect, useState } from 'react';
// @ts-ignore
import Link from 'next/link';
import useExchangeRate from "../../../data/API-rates/useExchangeRate";
import Skeleton from './skeleton';
import getUserCurrencyCode from '../../../data/API-rates/getUserCurrencyCode';
import Image from "next/image";

const Header: React.FC = () => {
    const exchangeRate = useExchangeRate(); // отримуємо обмінний курс
    const [userCurrencyCode, setUserCurrencyCode] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const fetchUserCurrencyCode = async () => {
            const currencyCode = await getUserCurrencyCode();
            setUserCurrencyCode(currencyCode);
        };

        fetchUserCurrencyCode();
    }, []);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 880);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-8">
                <div className="flex items-center space-x-4 gap-20">
                    <Link className="text-xl font-bold" href="/">
                        <Image src={"/logo.png"} width='93' height='58' alt={"logo"}/>
                    </Link>
                    {/* Бургер меню */}
                    <button
                        className={`md:hidden text-xl text-dark_blue ${isMenuOpen ? 'transform rotate-90' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        ☰
                    </button>
                    {/* Попап меню */}
                    {isMenuOpen && isSmallScreen && (
                        <div className="md:hidden absolute top-16 right-4 bg-white p-4 rounded shadow-lg z-10">
                            <nav className="flex flex-col items-center gap-4">
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
                                {/* Курс доллара */}
                                {!exchangeRate || !userCurrencyCode ? (
                                    <Skeleton />
                                ) : (
                                    <button className="bg-orange font-bold py-2 px-4 rounded text-white pointer-events-none">
                                        1 USD = {exchangeRate?.conversion_rates[userCurrencyCode]} {userCurrencyCode}
                                    </button>
                                )}
                            </nav>
                        </div>
                    )}
                    {/* Звичайне меню на планшетах і вище */}
                    <nav className={`hidden md:flex items-center space-x-4 text-dark_blue gap-8 ${isSmallScreen ? 'hidden' : 'flex'}`}>
                        <Link className="hover:text-gray-700" href="/">
                            Home
                        </Link>
                        <Link className="hover:text-gray-700" href="/tour">
                            Tour
                        </Link>
                        <Link className="hover:text-gray-700" href="/destination">
                            Destination
                        </Link>
                        <Link className="hover:text-gray-700" href="/contact">
                            Contact
                        </Link>
                    </nav>
                </div>
                {/* Курс доллара в правом верхнем углу */}
                {!isSmallScreen && (
                    <div>
                        {!exchangeRate || !userCurrencyCode ? (
                            <Skeleton />
                        ) : (
                            <button className="bg-orange font-bold py-2 px-4 rounded text-white pointer-events-none">
                                1 USD = {exchangeRate?.conversion_rates[userCurrencyCode]} {userCurrencyCode}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
