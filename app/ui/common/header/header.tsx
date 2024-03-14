"use client";

import React, { useEffect, useState } from 'react';
// @ts-ignore
import Link from 'next/link';
import useExchangeRate from "../../../data/API-rates/useExchangeRate";
import Skeleton from './skeleton';
import getUserCurrencyCode from '../../../data/API-rates/getUserCurrencyCode';

const Header: React.FC = () => {
    const exchangeRate = useExchangeRate(); // получаем обменный курс
    const [userCurrencyCode, setUserCurrencyCode] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserCurrencyCode = async () => {
            const currencyCode = await getUserCurrencyCode();
            setUserCurrencyCode(currencyCode);
        };

        fetchUserCurrencyCode();
    }, []);

    return (
        <header className="bg-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-8">
                <div className="flex items-center space-x-4 gap-20">
                    <Link className="text-xl font-bold" href="/">
                        <img src={"/logo.png"} alt={"logo"}/>
                    </Link>
                    <nav className="space-x-4 text-dark_blue flex items-center gap-8">
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

                {!exchangeRate || !userCurrencyCode ? (
                    <Skeleton />
                ) : (
                    <button className="bg-orange font-bold py-2 px-4 rounded text-white pointer-events-none">
                        1 USD = {exchangeRate?.conversion_rates[userCurrencyCode]} {userCurrencyCode}
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
