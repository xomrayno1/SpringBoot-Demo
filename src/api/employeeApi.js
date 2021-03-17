import axiosClient from './axiosClient'

const empApi = {
    getAll : () => {
        return axiosClient.get('/api/v1/employees');
    },
    deleteById: (id) => {
        const url = `/api/v1/employees/${id}`;
        return axiosClient.delete(url);
    }
}
export default empApi