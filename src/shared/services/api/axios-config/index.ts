import axios from  'axios';
import Enviroment from '../../../environment';
import errorInterceptor from './interceptors/ErrorInterceptor';
import responseInterceptor from './interceptors/ResponseInterceptor';

const Api = axios.create({
  baseURL: Enviroment.URL_BASE
});


Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);


export { Api };