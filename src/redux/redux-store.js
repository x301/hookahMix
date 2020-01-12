import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk"
import { tobacoListReducer } from "../component/TobacoList/tobacoList-reducer";
import { mixesReducer } from "../component/Mixes/mixes-reducer";
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer, getFirebase } from 'react-redux-firebase'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
    whitelist: ['tobacoListPage']
}
let rootReducers = combineReducers({
    tobacoListPage: tobacoListReducer,
    mixesListPage: mixesReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducers)

export let store = createStore(persistedReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(getFirebase))
    )
)
export let persistor = persistStore(store)


