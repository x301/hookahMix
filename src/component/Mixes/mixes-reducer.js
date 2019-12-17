

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
            console.log(state)
            return state
        }

        default: return state
    }

}

//Action Creators
const setMixes = (mixes) => ({ type: SET_MIXES, mixes })

//Thunk
export const getMixes = () => (dispatch, { getFirebase, getFirestore }) => {
    // mixesApi.getMixes().then(data => {

    //     dispatch(setMixes(data))
    // })
    const firestore = getFirestore()
    firestore.collections('HokahMixes')

}