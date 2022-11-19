import axios from "axios";

export default function axiosInterceptor() {
    // const DEBUG = process.env.NODE_ENV === "development"; 
    axios.interceptors.request.use(
      (config) => {
        const params = config.params || {};
        params["api_key"] = `5873e06f4a42d7c901d515b672defd63`;
        params["language"] = `en-US`;
        config.params = params
  
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}