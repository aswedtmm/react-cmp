import axios from 'axios';

const ApiOne = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const ApiTwo = axios.create({
    baseURL: 'https://reqres.in'
});

export { ApiOne, ApiTwo };