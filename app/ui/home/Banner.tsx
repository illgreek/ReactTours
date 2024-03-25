import React from 'react';

const Banner: React.FC = () => {
    return (
        <div className="w-full" style={{background: `url(/flexbg.png) no-repeat bottom center/cover`}}>
            <div className="container mx-auto py-8 px-8">
                <div className="flex justify-between items-center flex-col lg:px-14 md:px-8 px-4 lg:py-28 md:py-4 py-2">
                    <h2 className="text-4xl text-center font-bold text-white lg:pb-8 pb-2">Keep things flexible</h2>
                    <p className="text-lg text-center text-white">Use Reserve Now & Pay Later to secure the activities you<br/>
                        dont want to miss without being locked in.</p>
                </div>
            </div>
        </div>

    );
};

export default Banner;