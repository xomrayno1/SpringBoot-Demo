import {
 
    DELETE_EMP_BY_ID,
    GET_EMP_FAILED,
    GET_EMP_REQUEST,
    GET_EMP_SUCCESS,
    ADD_EMP_REQUEST,
    UPDATE_EMP_REQUEST,
    ADD_ROW_EMPLOYEE
} from '../../common/Constant'

const initalState = {
    employees: [],
    isLoading : false,
    error : null
}

function empReducer(state = initalState, action){
    const {payload, type,message} = action
    switch(type){
        case  GET_EMP_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_EMP_SUCCESS:
            return {
                ...state,
                employees : payload,
                isLoading : false
            }
        case GET_EMP_FAILED: 
            return {
                ...state,
                isLoading : false,
                error : message
            }
        case DELETE_EMP_BY_ID:
            return {
                ...state,
                isLoading : true
            }
        case ADD_EMP_REQUEST :
            return {
                ...state,
                isLoading: true
            }
        case ADD_ROW_EMPLOYEE :
            return {
                ...state,
                employees: [...state.employees,payload],
                isLoading: false
            }
        case UPDATE_EMP_REQUEST :
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}
export default empReducer;