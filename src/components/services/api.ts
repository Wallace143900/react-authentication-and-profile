import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.homologation.cliqdrive.com.br/',
  headers: {
    Accept: 'application/json;version=v1_web',
    'Content-Type': 'application/json',
  },
});

export const login = async (email: string, password: string) => {
  return api.post('auth/login/', { email, password });
};

export const getProfile = async (token: string) => {
  return api.get('auth/profile/', {
    headers: {
        Authorization: `Bearer ${token}`,
    }
});
};

export default api;