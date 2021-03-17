import {
    DELETE_EMP_BY_ID_SUCCESS,
    DELETE_EMP_BY_ID_FAILED,
    DELETE_EMP_BY_ID,
    GET_EMP_FAILED,
    GET_EMP_REQUEST,
    GET_EMP_SUCCESS
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
        case DELETE_EMP_BY_ID_SUCCESS:
            return {
                ...state,
                isLoading : false
            }
        case DELETE_EMP_BY_ID_FAILED:
            return {
                ...state,
                isLoading : false,
                error :message 
            }
        default:
            return state;
    }
}
export default empReducer;