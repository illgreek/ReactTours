import React, { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import toursData from '../../../public/data/tours/tours.json';

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

const TourSlider: React.FC = () => {
    const swiperRef = useRef<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

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

            swiperInstance.update();
        }
    };

    useEffect(() => {
        setSlideHeights();
        window.addEventListener('resize', setSlideHeights);

        return () => {
            window.removeEventListener('resize', setSlideHeights);
        };
    }, [loading]);

    const goToPrevSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const goToNextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const swiperParams = {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        pagination: { clickable: true },
        autoplay: { delay: 5000 },
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

    const skeletonCards = Array.from({ length: 6 }, (_, index) => (
        <SwiperSlide key={`skeleton-${index}`}>
            <div className="animate-pulse bg-light_gray rounded-lg overflow-hidden flex flex-col h-full ">
                <Skeleton height={200} />
                <div className="p-4 flex flex-col justify-between h-full">
                    <Skeleton height={20} width="80%" style={{ marginBottom: '8px' }} />
                    <Skeleton count={2} height={16} width="100%" />
                </div>
            </div>
        </SwiperSlide>
    ));

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="relative px-4">
            <button className="absolute top-[60%] left-[-5px] transform -translate-y-1/2 bg-gray-200 p-2 rounded-l-md z-10" onClick={goToPrevSlide}>
                <svg className="h-8 w-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button className="absolute top-[60%] right-[-5px] transform -translate-y-1/2 bg-gray-200 p-2 rounded-r-md z-10" onClick={goToNextSlide}>
                <svg className="h-8 w-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-dark_blue mb-4">Featured Trips</h2>
                {loading ? (
                    <Swiper {...swiperParams} ref={swiperRef}>
                        {skeletonCards}
                    </Swiper>

                ) : (
                    <Swiper {...swiperParams} ref={swiperRef}>
                        {limitedTours.map((tour: Tour) => (
                            <SwiperSlide key={tour.id}>
                                <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full ">
                                    <img src={`${tour.pictures[0]}`} alt={tour.name} className="w-full h-40 object-cover aspect-video" />
                                    <div className="p-4 flex flex-col justify-between h-full">
                                        <h3 className="text-lg font-bold text-dark_blue mb-2">{tour.name}</h3>
                                        <p className="text-dark_blue">{tour.description}</p>
                                        <div className="flex justify-between mt-4 border-t border-light_gray pt-4">
                                            <p className="text-dark_blue">{tour.duration}</p>
                                            <p className="text-dark_blue">${tour.price_per_day} per day</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    );
};

export default TourSlider;
