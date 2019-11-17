import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"

import { tobacoListReducer } from "../component/TobacoList/tobacoList-reducer";


let reducers = combineReducers({ tobacoList: tobacoListReducer });
let store = createStore(reducers, applyMiddleware(thunk));
export default store;
