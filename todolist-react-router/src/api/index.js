import axios from 'axios';

const baseUrl = 'http://localhost:5000';

axios.defaults.baseURL = baseUrl

export const getAllTodolist = () => {
    return axios.get('/api/todolist').then(res => res.data)
}