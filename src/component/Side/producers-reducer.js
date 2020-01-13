const SET_ACTIVE_SIDE = "components/producers/SETACTIVESIDE"
const SET_DEACTIVETE_SIDE = "components/producers/SETDEACTIVETESIDE"

const initialState = {
    activeSide: false
}

export const producersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_SIDE:
            return state = {
                ...state,
                activeSide: true
            }

        case SET_DEACTIVETE_SIDE:
            return state = {
                ...state,
                activeSide: false
            }
        default: return state
    }
}

const setActiveSide = (status) => ({ type: SET_ACTIVE_SIDE })
const setDeactiveteSide = (status) => ({ type: SET_DEACTIVETE_SIDE })