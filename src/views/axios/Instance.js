import axios from "axios";


export const token = localStorage.getItem("myToken")
export const instance = axios.create({
    baseURL: 'http://localhost:4000/api',
    // eslint prefer-template: "error"
    // eslint-env es6
    headers: {'Authorization': `Bearer ${token}`},
});