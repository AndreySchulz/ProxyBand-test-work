import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export const fetchUsersApi = () => {
  return axios.get('users').then(responce => responce.data);
};

export const postIdApi = id => {
  return axios.get(`posts?userId=${id}`).then(responce => responce.data);
};

export const albomsIdApi = id => {
  return axios.get(`albums?userId=${id}`).then(responce => responce.data);
};
