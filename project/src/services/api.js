import axios from 'axios';
import {BACKEND_URL, REQUEST_TIMEOUT, HttpCode} from '../const';

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    const {response} = error;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  api.interceptors.request.use((config) => {
    config.headers['x-token'] = localStorage.getItem('token');

    return config;
  });

  return api;
};
