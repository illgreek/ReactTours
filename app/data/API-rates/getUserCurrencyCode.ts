import axios, { AxiosResponse } from 'axios';

interface IPAPIData {
    currency: string | null;
}

const getUserCurrencyCode = async (): Promise<string | null> => {
    try {
        const response: AxiosResponse<IPAPIData> = await axios.get('https://ipapi.co/json/');
        const { data } = response;

        if (data && data.currency) {
            return data.currency;
        } else {
            console.error('Failed to get user currency from IP location');
            return null;
        }
    } catch (error) {
        console.error('Failed to get user currency from IP location:', error);
        return null;
    }
};

export default getUserCurrencyCode;