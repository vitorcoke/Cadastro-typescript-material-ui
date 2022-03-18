import { AxiosError } from 'axios';


const errorInterceptor = (error: AxiosError) => {

  if (error.message === 'Networ Error') {
    return Promise.reject(new Error('Erro de Conexão'));
  }

  if (error.response?.status === 401) {
    // do
  }

  return Promise.reject(error);
};

export default errorInterceptor;