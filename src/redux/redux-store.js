import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"

import { tobacoListReducer } from "../component/TobacoList/tobacoList-reducer";
import { mixesReducer } from "../component/Mixes/mixes-reducer";


let reducers = combineReducers({ tobacoList: tobacoListReducer, mixes: mixesReducer });
let store = createStore(reducers, applyMiddleware(thunk));
export default store;
