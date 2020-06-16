import axios from 'axios';
import STANDARD from './variables';

const api = axios.create({
  baseURL: STANDARD,
});

export default api;
