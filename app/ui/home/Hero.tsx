import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-between bg-gray-800 text-white bg-orange rounded-xl my-10 mx-8">
                <div className="p-8 md:w-1/2 w-full flex flex-col justify-center items-center text-center gap-6">
                    <h1 className="md:text-4xl text-2xl font-bold">
                        Grab up to
                        <span className="md:inline hidden whitespace-nowrap text-orange p-[50px] bg-contain" style={{ background: `url("/brush.png") 2px 48px no-repeat`}}>35% off</span>
                        <span className="md:hidden inline"> 35% off </span>
                        on your favorite Destination
                    </h1>
                    <p className="text-lg">Limited time offer, dont miss the opportunity</p>
                    <button className="bg-white hover:bg-light_gray text-orange font-bold py-4 px-6 rounded">
                        Book Now
                    </button>
                </div>
                <div className="w-1/2 md:block hidden h-[500px] max-h-[500px] rounded-r-xl" style={{ background: `url("/hero-bg.png") left center/cover no-repeat` }}>
                </div>
            </div>
        </div>

    );
};

export default HeroSection;
