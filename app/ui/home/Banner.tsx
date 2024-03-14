import React from 'react';

const Banner: React.FC = () => {
    return (
        <div className="w-full" style={{background: `url(/flexbg.png) no-repeat bottom center/cover`}}>
            <div className="container mx-auto py-8 px-8">
                <div className="flex justify-between items-center flex-col px-14 py-28">
                    <h2 className="text-4xl font-bold text-white pb-8">Keep things flexible</h2>
                    <p className="text-lg text-center">Use Reserve Now & Pay Later to secure the activities you<br/>
                        dont want to miss without being locked in.</p>
                </div>
            </div>
        </div>

    );
};

export default Banner;