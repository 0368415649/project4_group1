import axios from 'axios';

import { BASE_URL_API } from '../configs/urls';

const http = axios.create({
  baseURL: BASE_URL_API,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
