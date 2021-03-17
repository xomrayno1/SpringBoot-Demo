import {all} from 'redux-saga/effects'
import empSaga from './empSaga'
export default function* rootSaga(){
    yield all([
        empSaga()
    ])
}