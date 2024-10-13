import {API_BASE1, TOKEN, API_BASE2, KEY1, HOST1} from '@env';
import axios from 'axios';

// Create an Axios instance with custom headers
export const apiInstance = axios.create({
  baseURL: API_BASE1, // Replace with your API base URL
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
});

// Create an Axios instance with custom headers
export const apiInstance2 = axios.create({
  baseURL: API_BASE2, // Replace with your API base URL
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': KEY1,
    'X-RapidAPI-Host': HOST1,
  },
});
