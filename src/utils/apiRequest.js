import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;

const token = process.env.VUE_APP_API_TOKEN;

export default axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
