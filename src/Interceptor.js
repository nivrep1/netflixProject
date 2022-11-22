import axios from "axios";

const apiKey = `5873e06f4a42d7c901d515b672defd63`;
const host = " https://api.themoviedb.org";

function interceptor() {
  axios.interceptors.request.use(
    (config) => {
      if (config.url.includes(host)) {
        return config;
      }

      const params = config.params || {};
      params["api_key"] = apiKey;
      params["language"] = `en-US`;
      config.params = params;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return <></>;
}

export default interceptor;
