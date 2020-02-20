const SET_MIX = "/component/mixes/DESCRIBEMIX";

const initialState = {

}

//Reducer

export const mixReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MIX:
            state = {
                ...action.mix
            }
            return state;

        default:
            return state
    }
}

//AC
export const setMix = (mix) => ({ type: SET_MIX, mix })