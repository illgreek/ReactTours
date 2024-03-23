import React, { useState, useEffect } from 'react';

interface TourGalleryProps {
    pictures: string[];
}

const TourGallery: React.FC<TourGalleryProps> = ({ pictures }) => {
    const [validPictures, setValidPictures] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const checkImageExists = async () => {
            const validPicturesArray: string[] = [];
            for (const picture of pictures) {
                try {
                    const response = await fetch(picture);
                    if (response.ok) {
                        validPicturesArray.push(picture);
                    }
                } catch (error) {
                    console.error('Error checking image existence:', error);
                }
            }
            setValidPictures(validPicturesArray);
            setSelectedImage(validPicturesArray[0] || null);
            setLoading(false);
        };
        checkImageExists();
    }, [pictures]);

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    if (loading) {
        // Render skeleton while images are being loaded
        return (
            <div>
                {/* Large Image Skeleton */}
                <div className="flex items-center justify-center h-[500px] w-full rounded-lg overflow-hidden animate-pulse bg-light_gray mt-4">
                    <div className="h-full w-1/2 bg-gray-300 animate-pulse"></div>
                </div>

                <div className="flex items-center justify-center h-20 w-full rounded-lg overflow-hidden animate-pulse bg-light_gray mt-4">
                    <div className="h-full w-1/2 bg-gray-300 animate-pulse"></div>
                </div>

            </div>
        );
    }

    if (!validPictures || validPictures.length === 0) {
        return <div>No images available</div>;
    }

    return (
        <div>
            {/* Large Image */}
            {selectedImage && (
                <div className="mt-4">
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="rounded-lg w-full object-cover mb-4 h-[500px] transition-opacity duration-500"
                    />
                </div>
            )}

            {/* Gallery */}
            <div className="flex flex-wrap flex-row gap-4">
                {validPictures.map((picture, index) => (
                    <img
                        key={index}
                        src={picture}
                        alt={`Tour Image ${index + 1}`}
                        onClick={() => handleImageClick(picture)}
                        className={`rounded-lg cursor-pointer h-20 w-34 object-cover ${
                            selectedImage === picture ? 'opacity-100' : 'opacity-50'
                        } hover:opacity-100 transition-opacity duration-300`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TourGallery;
