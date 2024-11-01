import axios from "axios";

export const backendAxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

backendAxiosInstance.interceptors.request.use(async (request) => {
    return request;
});