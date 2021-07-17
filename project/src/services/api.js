import axios from 'axios';
import {BACKEND_URL, REQUEST_TIMEOUT, HttpCode} from '../const';

const token = localStorage.getItem('x-token') ?? null;

export const createAPI = (onUnauthorized, onError) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    const {response} = error;
    const {data, status} = response;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    onError({data, status});

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  api.interceptors.request.use((config) => {
    config.headers['x-token'] = localStorage.getItem('token');

    return config;
  });

  return api;
};
