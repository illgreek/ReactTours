// Breadcrumbs.tsx
import React from 'react';
import Link from 'next/link';

interface BreadcrumbsProps {
    tourName: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ tourName }) => {
    return (
        <nav className="py-4 text-sm" aria-label="breadcrumbs">
            <ol className="flex sm:space-x-2  space-x-0.5">
                <li>
                    <Link className="text-dark_blue" href="/">
                        Home
                    </Link>
                </li>
                <li className="flex items-center sm:space-x-2  space-x-0.5">
                    <span className="text-dark_blue">{'>'}</span>
                    <Link className="text-dark_blue" href="/tours">
                        Tours
                    </Link>
                </li>
                <li className="flex items-center sm:space-x-2 space-x-0.5">
                    <span className="text-dark_blue">{'>'}</span>
                    <span className="text-dark_blue">{tourName}</span>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
