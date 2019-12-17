import firebase from './../../config/fbConf';

const SET_MIXES = "components/mixes/SETMIXES"


const initialState = {

}

// Reducer
export const mixesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_MIXES: {
            state = {
                ...state,
                mixes: [...action.mixes]

            }

            return state
        }

        default: return state
    }

}

//Action Creators
const setMixes = (mixes) => ({ type: SET_MIXES, mixes })

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
            var code = error.code;
            var message = error.message;
            var details = error.details;
            // ...
        });
}

