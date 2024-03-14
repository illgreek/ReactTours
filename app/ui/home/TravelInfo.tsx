import React from 'react';

const TravelInfo: React.FC = () => {
    return (
        <div className="container mx-auto px-8 py-8" >
            <div className="flex justify-center items-center px-28 py-12 bg-orange rounded-xl" >
                {/* Left Section */}
                <div className="w-1/2 pr-8">
                    <h2 className="text-4xl font-bold text-white mb-4">We Make World Travel Easy</h2>
                    <p className="text-lg text-white mb-8">
                        Traveling under your own power and at your own pace, you'll connect more meaningfully with your destination and have more fun!
                    </p>
                    <button className="bg-white hover:bg-light_gray text-orange font-bold py-4 px-6 rounded">
                        Explore Our Tours
                    </button>
                </div>

                {/* Right Section */}
                <div className="w-1/2 flex justify-start items-center gap-10">
                    {/*Left Section*/}
                    <div className="flex justify-around items-center w-1/2 flex-col gap-10">
                        {/* Block 1 */}
                        <div className="text-center bg-white p-8 rounded-xl min-w-[240px]">
                            <img src="t1.png" alt="Logo 1" className="w-16 h-16 mx-auto mb-4" />
                            <p className="text-3xl font-bold text-orange">240</p>
                            <p className="text-dark_blue">Total Destinations</p>
                        </div>

                        {/* Block 2 */}
                        <div className="text-center bg-white p-8 rounded-xl min-w-[240px]">
                            <img src="t2.png" alt="Logo 2" className="w-16 h-16 mx-auto mb-4" />
                            <p className="text-3xl font-bold text-orange">92,842</p>
                            <p className="text-dark_blue">Happy Customers</p>
                        </div>
                    </div>

                    {/* Block 3 */}
                    <div className="text-center bg-white p-8 rounded-xl min-w-[240px]">
                        <img src="t3.png" alt="Logo 3" className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-3xl font-bold text-orange">3,672</p>
                        <p className="text-dark_blue">Amazing Tours</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TravelInfo;
