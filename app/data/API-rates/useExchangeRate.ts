import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

const EXCHANGE_RATE_API_URL = 'https://v6.exchangerate-api.com/v6/87c4c1fd28a923aae2765140/latest/USD';

interface ConversionRates {
    [key: string]: number;
}

interface ExchangeRateData {
    base_code: string;
    conversion_rates: ConversionRates;
}

const useExchangeRate = (): ExchangeRateData | null => {
    const [exchangeRate, setExchangeRate] = useState<ExchangeRateData | null>(null);

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response: AxiosResponse<ExchangeRateData> = await axios.get(EXCHANGE_RATE_API_URL);
                if (response.status === 200) {
                    setExchangeRate(response.data);
                } else {
                    console.error('Failed to fetch exchange rates:', response.statusText);
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError;
                    console.error('Failed to fetch exchange rates:', axiosError.message);
                } else {
                    console.error('Failed to fetch exchange rates:', error);
                }
            }
        };

        fetchExchangeRate();
    }, []);

    return exchangeRate;
};

export default useExchangeRate;
