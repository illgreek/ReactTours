import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Share: React.FC<{ url: string }> = ({ url }) => {
    const shareToFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    };

    const shareToInstagram = () => {
        window.open(`https://www.instagram.com/?url=${url}`, '_blank');
    };

    return (
        <div className="flex items-center space-x-4">
            <button
                onClick={shareToFacebook}
                className="flex items-center justify-center bg-blue-600 text-white rounded-full p-2"
            >
                <FaFacebook size={20} />

            </button>
            <button
                onClick={shareToInstagram}
                className="flex items-center justify-center bg-pink-600 text-white rounded-full p-2"
            >
                <FaInstagram size={20} />
            </button>
        </div>
    );
};

export default Share;
