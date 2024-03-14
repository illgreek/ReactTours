import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <div className="flex items-center justify-between bg-gray-800 text-white bg-orange rounded-xl my-10 mx-8">
            <div className="p-8 w-1/2 flex flex-col justify-center items-center text-center gap-6">
                <h1 className="text-4xl font-bold">
                    Grab up to
                    <span className="text-orange p-[50px] bg-contain" style={{ background: `url("/brush.png") 2px 48px no-repeat`}}>35% off</span>
                    on your favorite Destination
                </h1>
                <p className="text-lg">Limited time offer, don't miss the opportunity</p>
                <button className="bg-white hover:bg-light_gray text-orange font-bold py-4 px-6 rounded">
                    Book Now
                </button>
            </div>
            <div className="w-1/2 h-[500px] max-h-[500px] rounded-r-xl" style={{ background: `url("/hero-bg.png") left center/cover no-repeat` }}>
            </div>
        </div>
    );
};

export default HeroSection;
