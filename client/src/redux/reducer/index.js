import { combineReducers } from "redux";
import { coinReducer } from "./coinReducer";
import { authReducer} from "./authReducer";

const reducers = combineReducers({
  auth : authReducer,
  allCoins: coinReducer,
});

export default reducers