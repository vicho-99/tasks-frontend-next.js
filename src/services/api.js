import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3005/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

export default instance;