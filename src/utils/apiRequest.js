import axios from 'axios';
import { API_URI } from '@/config/api';

const token = localStorage.getItem('token');

export default axios.create({
  baseURL: API_URI,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
