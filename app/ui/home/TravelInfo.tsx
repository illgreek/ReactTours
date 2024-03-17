import React from 'react';
import Image from "next/image";

const TravelInfo: React.FC = () => {
    return (
        <div className="container mx-auto px-8 py-8" >
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start px-4 lg:px-28 py-12 bg-orange rounded-xl" >
                {/* Left Section */}
                <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-8">We Make World Travel Easy</h2>
                    <p className="text-lg lg:text-xl text-white mb-8 lg:mb-10">
                        Traveling under your own power and at your own pace, youll connect more meaningfully with your destination and have more fun!
                    </p>
                    <button className="bg-white hover:bg-light_gray text-orange font-bold py-4 px-6 rounded lg:block flex mx-auto">
                        Explore Our Tours
                    </button>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/2 flex justify-center lg:flex-row flex-col lg:justify-start items-center gap-4 lg:gap-10 mt-8 lg:mt-0">
                    {/* Left Section */}
                    <div className="flex justify-around items-center max-w-sm  w-full lg:w-1/2 flex-col gap-6 lg:gap-10">
                        {/* Block 1 */}
                        <div className="text-center bg-white p-6 lg:p-8 rounded-xl min-w-[240px] w-full lg:w-auto">
                            <Image src="/t1.png" alt="Logo 1" width='60' height='60' className="w-16 h-16 mx-auto mb-2 lg:mb-4" />
                            <p className="text-xl lg:text-2xl font-bold text-orange">240</p>
                            <p className="text-dark_blue">Total Destinations</p>
                        </div>

                        {/* Block 2 */}
                        <div className="text-center bg-white p-6 lg:p-8 rounded-xl min-w-[240px] w-full lg:w-auto">
                            <Image src="/t2.png" alt="Logo 2" width='60' height='60' className="w-16 h-16 mx-auto mb-2 lg:mb-4" />
                            <p className="text-xl lg:text-2xl font-bold text-orange">92,842</p>
                            <p className="text-dark_blue">Happy Customers</p>
                        </div>
                    </div>

                    {/* Block 3 */}
                    <div className="text-center bg-white p-6 lg:p-8 rounded-xl min-w-[240px] max-w-sm w-full lg:w-auto">
                        <Image src="/t3.png" alt="Logo 3" width='60' height='60' className="w-16 h-16 mx-auto mb-2 lg:mb-4" />
                        <p className="text-xl lg:text-2xl font-bold text-orange">3,672</p>
                        <p className="text-dark_blue">Amazing Tours</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelInfo;
