import React, { useState, useEffect } from 'react';
import Select from 'react-select';

interface Tour {
    price_per_day: number;
    duration: string;
    group_size: number;
    age_category: string;
    languages: string[];
    destinations: string[];
    attractions: string[];
}

interface FiltersProps {
    tours: Tour[];
    onChange: (filterName: string, value: string) => void;
    onReset: () => void;
}

const Filters: React.FC<FiltersProps> = ({ tours, onChange, onReset }) => {
    const uniqueValues = (field: keyof Tour) => {
        const values = new Set<string>();
        tours.forEach(tour => {
            if (field === 'languages' || field === 'destinations' || field === 'attractions') {
                (tour[field] as string[]).forEach(value => values.add(value));
            } else {
                values.add(tour[field].toString());
            }
        });
        return Array.from(values).map(value => ({ value, label: value }));
    };

    // Calculate min and max prices
    const prices = tours.map(tour => tour.price_per_day);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    // State for current price
    const [currentPrice, setCurrentPrice] = useState<string>(maxPrice.toString());

    // State for selected options
    const [selectedDuration, setSelectedDuration] = useState<string>('');
    const [selectedGroupSize, setSelectedGroupSize] = useState<string>('');
    const [selectedAgeCategory, setSelectedAgeCategory] = useState<string>('');
    const [selectedLanguages, setSelectedLanguages] = useState<string>('');
    const [selectedDestinations, setSelectedDestinations] = useState<string>('');
    const [selectedAttractions, setSelectedAttractions] = useState<string>('');

    // Function to format price
    const formatPrice = (price: number) => {
        return price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    };

    // Handle change in price range
    const handlePriceChange = (value: string) => {
        setCurrentPrice(value);
        onChange('price_per_day', value);
    };

    // Reset all filters and selected options
    const handleResetFilters = () => {
        setCurrentPrice(maxPrice.toString());
        setSelectedDuration('');
        setSelectedGroupSize('');
        setSelectedAgeCategory('');
        setSelectedLanguages('');
        setSelectedDestinations('');
        setSelectedAttractions('');
        onReset();
    };

    // Options with 'All' for select filters
    const allOption = { value: '', label: 'All' };
    const durationOptions = [allOption, ...uniqueValues('duration')];
    const groupSizeOptions = [allOption, ...uniqueValues('group_size')];
    const ageCategoryOptions = [allOption, ...uniqueValues('age_category')];
    const languagesOptions = [allOption, ...uniqueValues('languages')];
    const destinationsOptions = [allOption, ...uniqueValues('destinations')];
    const attractionsOptions = [allOption, ...uniqueValues('attractions')];


    // Custom styles for Select component
    const customStyles = {
        control: (provided: any, state: any) => ({
            ...provided,
            border: state.isFocused ? '1px solid #f6ad55' : '1px solid #e2e8f0',
            boxShadow: state.isFocused ? '0 0 0 2px rgba(246, 173, 85, 0.2)' : 'none',
            borderRadius: '0.375rem',
            minHeight: 'auto',
            '&:hover': {
                borderColor: '#f6ad55',
            },
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#f6ad55' : 'transparent',
            color: state.isFocused ? 'white' : '#4a5568',
            '&:hover': {
                backgroundColor: '#f6ad55',
                color: 'white',
            },
        }),
        singleValue: (provided: any) => ({
            ...provided,
            color: '#4a5568',
        }),
    };

    return (
        <div className="flex flex-col border-light_gray border rounded-lg">
            <div className="bg-orange p-4 rounded-t-lg">
                <h3 className="text-lg text-white font-semibold mb-2">Filters</h3>
                <span className="text-white">Current price: {formatPrice(parseFloat(currentPrice))}</span>
                <div className="flex justify-between">
                    <span className="text-white font-bold">{formatPrice(minPrice)}</span>
                    <span className="text-white font-bold">{formatPrice(maxPrice)}</span>
                </div>
                <input
                    type="range"
                    min={minPrice.toString()}
                    max={maxPrice.toString()}
                    value={currentPrice}
                    onChange={(e) => handlePriceChange(e.target.value)}
                    className="border border-gray-300 rounded-md w-full bg-white"
                />
            </div>
            <div className="flex flex-col p-4 bg-white rounded-b-lg">
                <h3 className="text-lg font-semibold">Duration</h3>
                <Select
                    className="mb-4"
                    options={durationOptions}
                    value={durationOptions.find(option => option.value === selectedDuration)}
                    onChange={(selectedOption) => {
                        setSelectedDuration(selectedOption?.value || '');
                        onChange('duration', selectedOption?.value || '');
                    }}
                    instanceId="duration-select"
                    styles={customStyles}
                />
                <h3 className="text-lg font-semibold ">Group Size</h3>
                <Select
                    className="mb-4"
                    options={groupSizeOptions}
                    value={groupSizeOptions.find(option => option.value === selectedGroupSize)}
                    onChange={(selectedOption) => {
                        setSelectedGroupSize(selectedOption?.value || '');
                        onChange('group_size', selectedOption?.value || '');
                    }}
                    instanceId="group-size-select"
                    styles={customStyles}
                />
                <h3 className="text-lg font-semibold">Age Category</h3>
                <Select
                    className="mb-4"
                    options={ageCategoryOptions}
                    value={ageCategoryOptions.find(option => option.value === selectedAgeCategory)}
                    onChange={(selectedOption) => {
                        setSelectedAgeCategory(selectedOption?.value || '');
                        onChange('age_category', selectedOption?.value || '');
                    }}
                    instanceId="age-category-select"
                    styles={customStyles}
                />
                <h3 className="text-lg font-semibold">Languages</h3>
                <Select
                    className="mb-4"
                    options={languagesOptions}
                    value={languagesOptions.find(option => option.value === selectedLanguages)}
                    onChange={(selectedOption) => {
                        setSelectedLanguages(selectedOption?.value || '');
                        onChange('languages', selectedOption?.value || '');
                    }}
                    instanceId="languages-select"
                    styles={customStyles}
                />
                <h3 className="text-lg font-semibold">Destinations</h3>
                <Select
                    className="mb-4"
                    options={destinationsOptions}
                    value={destinationsOptions.find(option => option.value === selectedDestinations)}
                    onChange={(selectedOption) => {
                        setSelectedDestinations(selectedOption?.value || '');
                        onChange('destinations', selectedOption?.value || '');
                    }}
                    instanceId="destinations-select"
                    styles={customStyles}
                />
                <h3 className="text-lg font-semibold">Attractions</h3>
                <Select
                    className="mb-4"
                    options={attractionsOptions}
                    value={attractionsOptions.find(option => option.value === selectedAttractions)}
                    onChange={(selectedOption) => {
                        setSelectedAttractions(selectedOption?.value || '');
                        onChange('attractions', selectedOption?.value || '');
                    }}
                    instanceId="attractions-select"
                    styles={customStyles}
                />
                <button
                    onClick={handleResetFilters}
                    className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
                >
                    Reset Filters
                </button>
            </div>
        </div>
    );
};

export default Filters;
