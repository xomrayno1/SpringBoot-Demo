import {
    GET_EMP_REQUEST,
    DELETE_EMP_BY_ID,
    UPDATE_EMP_REQUEST,
    ADD_ROW_EMPLOYEE,
    ADD_EMP_REQUEST
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
export const updateEmp = (data) => {
    return {
        type :UPDATE_EMP_REQUEST,
        payload : data
    }
}
export const addEmp = (data) => {
    return {
        type :ADD_EMP_REQUEST,
        payload : data
    }
}
export const addRowEmp = (data) =>{
    return {
        type : ADD_ROW_EMPLOYEE,
        payload : data
    }
}