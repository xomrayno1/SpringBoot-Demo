import {put,takeEvery,call} from 'redux-saga/effects'
import {GET_EMP_FAILED,
    GET_EMP_SUCCESS,
    GET_EMP_REQUEST,
    DELETE_EMP_BY_ID,
    ADD_EMP_REQUEST,
    UPDATE_EMP_REQUEST
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
        const response = yield call(empApi.getAll);
        yield put({type: GET_EMP_SUCCESS, payload : response})
    } catch (error) {
        yield put({type: GET_EMP_FAILED ,message : error.message})
    }
}
function * addEmpRequest({payload}){
    yield call(empApi.addEmp,payload)
    try{
        const resonse =  yield call(empApi.getAll);
        yield put({type: GET_EMP_SUCCESS,payload : resonse});
    }catch(error){
        yield put({type: GET_EMP_FAILED,message :  error.message});
    }
}
function * updateEmp({payload}){
    yield call(empApi.updatEmp, payload)
    try{
        const resonse =  yield call(empApi.getAll);
        yield put({type: GET_EMP_SUCCESS,payload : resonse});
    }catch(error){
        yield put({type: GET_EMP_FAILED,message :  error.message});
    }
}

export default function* empSaga(){
   yield takeEvery(GET_EMP_REQUEST,fetchEmp)
   yield takeEvery(DELETE_EMP_BY_ID,deleteEmpById)
   yield takeEvery(ADD_EMP_REQUEST, addEmpRequest)
   yield takeEvery(UPDATE_EMP_REQUEST, updateEmp)
}