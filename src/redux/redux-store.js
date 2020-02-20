import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk"
import { tobacoListReducer } from "../component/TobacoList/tobacoList-reducer";
import { mixesReducer } from "../component/Mixes/mixes-reducer";
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer, getFirebase } from 'react-redux-firebase'
import { producersReducer } from './../component/Side/producers-reducer';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { mixReducer } from './../component/Mixes/DescribeMixes/describe-reducer';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
    whitelist: ['tobacoListPage', 'mixesListPage']
}
let rootReducers = combineReducers({
    tobacoListPage: tobacoListReducer,
    mixesListPage: mixesReducer,
    producersPage: producersReducer,
    describeMixPage: mixReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducers)

export let store = createStore(persistedReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(getFirebase))
    )
)
export let persistor = persistStore(store)


