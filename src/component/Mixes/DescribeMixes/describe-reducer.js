const SET_MIX = "/component/mixes/DESCRIBEMIX";

const initialState = {
    mixName:"",
tobaccoMix: []
}

//Reducer

export const mixReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MIX:
            state = {
                ...state,
                mixName:[ ...action.mixName],
                tobaccoMix: [...action.mix]
            }
            return state;

        default:
            return state
    }
}

//AC
export const setMix = (mix,mixName) => ({ type: SET_MIX, mix,mixName })