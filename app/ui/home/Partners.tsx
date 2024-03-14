import React from 'react';
import partnersData from '../../../public/data/partners/partners.json'
import Image from "next/image";

interface Partner {
    id: number;
    logo: string;
}

const Partners: React.FC = () => {
    return (
        <div className="container mx-auto py-16 px-8">
            <h2 className="text-2xl font-bold text-center text-dark_blue mb-8">Trusted by all the largest travel brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {partnersData.partners.map((partner: Partner) => (
                    <div key={partner.id} className="flex justify-center items-center rounded-lg  p-4">
                        <Image src={`${partner.logo}`} alt={`Partner ${partner.id}`} width='100' height='60' className="w-24 h-8" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;
