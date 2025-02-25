import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function useAddDetail(endpoint, body) {
    try {
        const response = await axios.post(`${BACKEND_URL}${endpoint}`, body, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw (error?.message || 'Something went wrong');
    } 
}