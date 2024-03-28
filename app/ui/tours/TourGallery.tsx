import React, { useState, useEffect } from 'react';
import Image from "next/image";

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
                <div className="flex items-center justify-center sm:h-[500px] h-[250px] w-full rounded-lg overflow-hidden animate-pulse bg-light_gray mt-4">
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
                    <Image
                        src={selectedImage}
                        alt="Selected"
                        className="rounded-lg w-full object-cover mb-4 sm:h-[500px] h-[250px] transition-opacity duration-500"
                        height="500"
                        width="1000"
                    />
                </div>
            )}

            {/* Gallery */}
            <div className="flex flex-wrap flex-row gap-4">
                {validPictures.map((picture, index) => (
                    <Image
                        key={index}
                        src={picture}
                        alt={`Tour Image ${index + 1}`}
                        height="200"
                        width="300"
                        onClick={() => handleImageClick(picture)}
                        className={`rounded-lg cursor-pointer h-20 w-28 object-cover ${
                            selectedImage === picture ? 'opacity-100' : 'opacity-50'
                        } hover:opacity-100 transition-opacity duration-300`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TourGallery;
