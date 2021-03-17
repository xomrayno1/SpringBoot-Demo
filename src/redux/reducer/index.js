import {combineReducers} from 'redux'
import empReducer from '../reducer/empReducer'
import 'bootstrap/dist/css/bootstrap.min.css';


const rootReducer = combineReducers({
    employee : empReducer
})
export default rootReducer
