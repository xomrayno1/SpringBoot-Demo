import {put,takeEvery,call} from 'redux-saga/effects'
import {GET_EMP_FAILED,
    GET_EMP_SUCCESS,
    GET_EMP_REQUEST,
    DELETE_EMP_BY_ID,
    DELETE_EMP_BY_ID_FAILED,
    DELETE_EMP_BY_ID_SUCCESS
} 
    from '../../common/Constant'
import empApi from '../../api/employeeApi'
 
 
function* fetchEmp(){
    try {
        const employees = yield call(empApi.getAll);
        yield put({type:GET_EMP_SUCCESS,payload : employees})
    } catch (error) {
        yield put({type: GET_EMP_FAILED, message : error.message})
    }
}
function* deleteEmpById({payload}){
    yield call(empApi.deleteById,payload)
    try {
        yield put({type: DELETE_EMP_BY_ID_SUCCESS})
    } catch (error) {
        yield put({type: DELETE_EMP_BY_ID_FAILED ,message : error.message})
    }
}

export default function* empSaga(){
   yield takeEvery(GET_EMP_REQUEST,fetchEmp)
   yield takeEvery(DELETE_EMP_BY_ID,deleteEmpById)
}