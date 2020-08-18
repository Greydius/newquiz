import axios from 'axios';
import { API_URI } from '@/config/api';

export default axios.create({
  baseURL: API_URI,
  headers: {
  },
});
