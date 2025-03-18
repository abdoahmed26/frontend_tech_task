import axios from "axios";
import Cookie from "cookie-universal";

export const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
    withCredentials: true,
});

export const cookie = Cookie()