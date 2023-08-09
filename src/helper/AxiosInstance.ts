import axios, {AxiosResponse} from 'axios';
const getAxiosInstance = (contentType: string = 'application/json') => {
  const axiosInstance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 10000,
  });
  // midware before send req and receive data
  const onRequest = (config: any) => {
    config.headers = {
      'Content-Type': contentType,
      Authorization: 'Bearer YOUR_ACCESS_TOKEN',
    };
    return config;
  };
  const onResponse = (res: AxiosResponse) => {
    return res.data;
  };
  const onErr = (err: Error) => {
    return Promise.reject(err);
  };
  axiosInstance.interceptors.request.use(onRequest, onErr);
  axiosInstance.interceptors.response.use(onResponse, onErr);
  return axiosInstance;
};
export default getAxiosInstance;
