import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-e7794.firebaseio.com/'
});

export default instance;
