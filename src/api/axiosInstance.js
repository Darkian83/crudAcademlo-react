import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://crud-academlo-dev-xjzc.3.us-1.fl0.io/",
});

export default axiosInstance;
