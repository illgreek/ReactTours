import React from 'react';

interface PaginationProps {
    toursPerPage: number;
    totalTours: number;
    currentPage: number;
    paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ toursPerPage, totalTours, currentPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTours / toursPerPage); i++) {
        pageNumbers.push(i);
    }

    // Handle page change
    const handlePageChange = (pageNumber: number) => {
        paginate(pageNumber);
        // Scroll to top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="mt-4">
            <ul className="pagination flex justify-center items-center gap-2">
                {pageNumbers.map((number) => (

                    <li key={number}>
                        <button
                            onClick={() => handlePageChange(number)}
                            className={`hover:bg-light_orange text-white font-bold rounded-full h-9 w-9 ${currentPage === number ? 'bg-light_orange' : 'bg-orange'}`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
