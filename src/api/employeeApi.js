import axios from 'axios';
import axiosClient from './axiosClient'

const empApi = {
    getAll : () => {
        return axiosClient.get('/api/v1/employees');
    },
    deleteById: (id) => {
        const url = `/api/v1/employees/${id}`;
        return axiosClient.delete(url);
    },
    addEmp : (params) => {
        return axiosClient.post('/api/v1/employees',params);
    },
    updatEmp : (params) => {
        return axiosClient.put('/api/v1/employees',params);
    }
}
export default empApi