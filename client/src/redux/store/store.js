import { combineReducers,applyMiddleware,createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
import authReducer from "../reducer/authReducer"

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(
    combineReducers({
        auth : authReducer
    }), composedEnhancer
)

export default store