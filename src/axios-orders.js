import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-4e0d9.firebaseio.com'
});

export default instance;