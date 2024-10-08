import axios from "axios";
const   Api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: true,
});

export default Api;

Api.interceptors.request.use(
    (config) => {
        let token = null
        if(typeof window !== "undefined"){
            token = localStorage.getItem("accessToken");
        }
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
