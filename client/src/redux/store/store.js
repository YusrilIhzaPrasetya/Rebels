import { combineReducers,applyMiddleware,createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(
    combineReducers({
        
    }),
    composedEnhancer
)

export default store