import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://app-movie-server21.onrender.com",
});
export default axiosInstance;
