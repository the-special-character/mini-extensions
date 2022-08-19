import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.airtable.com/v0/app8ZbcPx7dkpOnP0",
  timeout: 5000,
  timeoutErrorMessage: "Something went wrong! Please try after some time..",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const updatedConfig = {...config,headers: {
      Authorization: 'Bearer key5XnTmyAFPLaL2q'
    }}
    
    return updatedConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response.data.records
    },
    (error) => {
        if(error?.response?.data?.error?.message) {
          return Promise.reject(new Error(error.response.data.error.message))
        }
        return Promise.reject(error);
    }
  );

export default axiosInstance;
