import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import toursData from '../../../public/data/tours/tours.json';
import Image from "next/image";

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
}

const Skeleton: React.FC<{ maxHeight: number }> = ({ maxHeight }) => {
    return (
        <div className="flex items-center justify-center h-20 w-full rounded overflow-hidden animate-pulse bg-light_gray" style={{ height: `${maxHeight}px` }}>
            <div className="h-20 w-20 mr-4 bg-gray-300 animate-pulse"></div>
            <div className="flex-1">
                <div className="h-4 w-24 mb-2 bg-gray-300 animate-pulse"></div>
                <div className="h-4 w-32 bg-gray-300 animate-pulse"></div>
            </div>
        </div>
    );
};

const TourSlider: React.FC = () => {
    const swiperRef = useRef<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [maxSlideHeight, setMaxSlideHeight] = useState<number | null>(null);

    const setSlideHeights = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiperInstance = swiperRef.current.swiper;
            const slides = swiperInstance.slides;

            let maxHeight = 0;
            slides.forEach((slide: HTMLElement) => {
                slide.style.height = '';
                const slideHeight = slide.offsetHeight;
                if (slideHeight > maxHeight) {
                    maxHeight = slideHeight;
                }
            });

            slides.forEach((slide: HTMLElement) => {
                slide.style.height = `${maxHeight}px`;
            });

            setMaxSlideHeight(maxHeight);
            swiperInstance.update();
        }
    };

    useEffect(() => {
        const initializeSwiper = async () => {
            setLoading(false);
        };
        initializeSwiper();
    }, []);

    useEffect(() => {
        setSlideHeights();
        window.addEventListener('resize', setSlideHeights);

        return () => {
            window.removeEventListener('resize', setSlideHeights);
        };
    }, [loading]);

    const swiperParams = {
        modules: [Pagination, Autoplay],
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        pagination: { clickable: true },
        autoplay: { delay: 3000 },
        navigation: false,
        breakpoints: {
            1: { slidesPerView: 1 },
            368: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
        },
    };

    const limitedTours = toursData.tours.slice(0, 6);

    if (loading) {
        return (
            <div className="relative px-4 container mx-auto">
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold text-dark_blue mb-4">Featured Trips</h2>
                    <Swiper {...swiperParams}>
                        <div className="mb-20">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <SwiperSlide key={index}>
                                    <Skeleton maxHeight={maxSlideHeight || 200} />
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </div>
        );
    }

    const trimDescription = (description: string) => {
        const maxLength = 100;
        if (description.length > maxLength) {
            return `${description.slice(0, maxLength)}...`;
        }
        return description;
    };

    return (
        <div className="relative px-4 container mx-auto">
            <button className="absolute top-[60%] left-[0px] transform -translate-y-1/2 bg-gray-200 p-2 rounded-l-md z-10" >

            </button>
            <button className="absolute top-[60%] right-[0px] transform -translate-y-1/2 bg-gray-200 p-2 rounded-r-md z-10" >

            </button>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-dark_blue mb-4">Featured Trips</h2>
                <Swiper {...swiperParams} ref={swiperRef}>
                    {limitedTours.map((tour: Tour) => (
                        <SwiperSlide key={tour.id}>
                            <Link href={`/tours/${tour.id}`}>
                                <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full">
                                    <Image src={`${tour.pictures[0]}`} alt={tour.name} width='300' height='200' className="w-full h-40 object-cover aspect-video" />
                                    <div className="p-4 flex flex-col justify-between h-full">
                                        <h3 className="text-lg font-bold text-dark_blue mb-2">{tour.name}</h3>
                                        <p className="text-dark_blue">{trimDescription(tour.description)}</p>
                                        <div className="flex justify-between mt-4 border-t border-light_gray pt-4">
                                            <p className="text-dark_blue">{tour.duration}</p>
                                            <p className="text-dark_blue">${tour.price_per_day} per day</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TourSlider;
