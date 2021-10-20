import { combineReducers,applyMiddleware,createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
import authReducer from "../reducer/authReducer"
import reducers from "../reducer/index";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore( reducers, composedEnhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



export default store