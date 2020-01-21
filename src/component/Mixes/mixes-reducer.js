import firebase from './../../config/fbConf';

const SET_MIXES = "components/mixes/SETMIXES";
const SET_FETCH_STATUS = "components/mixes/SEFRTCHSTATUS";


const initialState = {
    isFetching: false

}

// Reducer
export const mixesReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_MIXES: {
            state = {
                ...state,
                mixes: [...action.mixes],
                isFetching: true

            }

            return state
        }

        case SET_FETCH_STATUS: {
            state = {
                ...state,
                isFetching: false

            }

            return state
        }

        default: return state
    }

}

//Action Creators
const setMixes = (mixes) => ({ type: SET_MIXES, mixes })
export const setFetchingStatus = () => ({ type: SET_FETCH_STATUS })

//Thunk
export const getMixes = getBlender => dispatch => {
    const getFindMixes = firebase
        .functions()
        .httpsCallable('getFindMixes');

    return getFindMixes(getBlender)
        .then(function (result) {
            dispatch(setMixes(result.data))
        })
        .catch(function (error) {
            // Getting the Error details.
            let code = error.code;
            let message = error.message;
            let details = error.details;
            // ...
        });
}

