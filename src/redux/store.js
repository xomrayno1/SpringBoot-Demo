import {createStore,compose,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer/index'
import rootSaga from './sagas/rootSaga'

const sagaMiddleWare = createSagaMiddleware();

const store =  compose(
    applyMiddleware(sagaMiddleWare),
    window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer)
sagaMiddleWare.run(rootSaga);

export default store;