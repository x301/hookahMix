//Actions
import { tobacoApi } from './../../api/firebase';

const SET_TOBACO_LIST = "components/tobacoList/GETTOBACOLIST";

const initialState = {
    tobacoItems: [

    ]

};


//Reducer
export const tobacoListReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state
    }
    switch (action.type) {
        case SET_TOBACO_LIST:

            stateCopy.tobacoItems.push(action.List)

            return stateCopy



        default: return state;
    }
}

//Action Creators
export const setTobacoItems = (List) => ({ type: SET_TOBACO_LIST, List })

//thunk
export const getTobacoItems = (location) => (dispatch) => {
    tobacoApi.getTobacoItems(location).then(data => {

        dispatch(setTobacoItems(data))
    })
}

