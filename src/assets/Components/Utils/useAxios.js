import { jwtDecode } from "jwt-decode";
import axios from "axios";
import dayjs from "dayjs";

function useAxios() {
  const token = localStorage.getItem("token");

  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  axiosInstance.interceptors.request.use(async (config) => {
    const user = jwtDecode(token);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (isExpired) {
      try {
        const response = await axios.post(`${baseUrl}/refresh`, {
          refreshToken: localStorage.getItem("refreshToken"),
        });
        const accessToken = response.data.accessToken;
        localStorage.setItem("token", accessToken);
        config.headers.Authorization = `Bearer ${accessToken}`;
      } catch (error) {
        console.log(error);
      }
    }
    return config;
  });
  return axiosInstance;
}

export const authInstances = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default useAxios;
