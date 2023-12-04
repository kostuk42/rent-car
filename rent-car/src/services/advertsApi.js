// services/api.js
import axios from 'axios';

export const API_BASE_URL = 'https://64db6c66593f57e435b0f12d.mockapi.io/api';

export const getAdvertsByPage = async (page) => {
    try {
        console.log("getAdvertsByPage")
        const params = {
                page: page,
                limit: 12,
            };
        console.log("params")
        console.log(params)
        const response = await axios.get(`${API_BASE_URL}/adverts`, {params});
        console.log("response.data")
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching adverts:', error);
    }
};

export const getAllAdverts = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/adverts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching adverts:', error);
    }
}
