import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.homologation.cliqdrive.com.br/',
  headers: {
    Accept: 'application/json;version=v1_web',
    'Content-Type': 'application/json',
  },
});

const token = localStorage.getItem("@token");
const convertedToken = token ? JSON.parse(token) : null;
console.log(convertedToken);
export const login = async (email: string, password: string) => {
  return api.post('auth/login/', { email, password });
};

export const getProfile = async () => {
  return api.get('auth/profile/', {
    headers: {
        Authorization: `Bearer ${convertedToken}`,
    }
});
};

export default api;