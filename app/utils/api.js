import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_URL,
    timeout: 40000,
    headers: { Accept: 'application/json' },
  });
  
  export function setAuthToken(authToken) {
    api.defaults.headers.common['X-Auth-Token'] = authToken;
  }
  
  export default api;