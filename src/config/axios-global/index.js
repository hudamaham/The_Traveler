import axios from "axios";

const apiLink = "http://92.204.164.7:8888";
export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: apiLink }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        url: apiLink + baseUrl + url,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
// axios.interceptors.request.use(
//   (config) => {
//     if (config.url?.includes("refresh")) {
//     } else {
//       const accessToken = localStorage.getItem("access");

//       config.headers = {
//         Authorization: `Token ${accessToken}`,
//         Accept: "application/json",
//       };
//     }
//     return config;
//   },
//   async (error) => {
//     Promise.reject(error);
//   }
// );
