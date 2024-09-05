import axios from "axios";

const axiosInstance = axios.post({
    baseURL: "https://rahimafrooz-battery-backend.vercel.app/api/v1",
    withCredentials: true,
});

export default axiosInstance;
