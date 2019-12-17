import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import { tobacoListReducer } from "../component/TobacoList/tobacoList-reducer";
import { mixesReducer } from "../component/Mixes/mixes-reducer";
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer, getFirebase } from 'react-redux-firebase'



let rootReducers = combineReducers({
    tobacoListPage: tobacoListReducer,
    mixesListPage: mixesReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});
let store = createStore(rootReducers,
    compose(
        applyMiddleware(thunk.withExtraArgument(getFirebase))
    )
)

export default store;
