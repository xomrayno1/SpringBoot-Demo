import {
    GET_EMP_REQUEST,
    DELETE_EMP_BY_ID
} from '../../common/Constant'

export const getEmpRequest = () => {
    return {
        type : GET_EMP_REQUEST
    }
}
export const deleteItem = (id) => {
    return {
        type : DELETE_EMP_BY_ID,
        payload : id
    }
}