import { mixesApi } from '../../api/firebase';

const SET_MIXES = "components/mixes/SETMIXES"


const initialState = {
    mixes: [

    ]
}

// Reducer
export const mixesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MIXES: {
            state = {
                ...state,
                mixes: [...action.mixes]

            }
            console.log(state.mixes)
            return state
        }

        default: return state
    }

}

//Action Creators
const setMixes = (mixes) => ({ type: SET_MIXES, mixes })

//Thunk
export const getMixes = () => (dispatch) => {
    mixesApi.getMixes().then(data => {
        console.log(data)
        dispatch(setMixes(data))
    })

}