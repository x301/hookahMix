//Actions

const SET_TOBACO_LIST = "components/tobacoList/GETTOBACOLIST";
const ADD_TOBACO_AND_ITEMS_IN_BLENDER = "components/blender/ADDTOBACOANDITEMSINBLENDER"
const ADD_TOBACO_ITEMS_IN_BLENDER = "components/blender/ADDTOBACOITEMINBLENDER"
const DEL_TOBACO_ITEMS_FROM_BLENDER = "components/blender/DELTOBACOITEMSFROMBLENDER"

const initialState = {
    blender: {

    }
};


//Reducer
export const tobacoListReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        blender: { ...state.blender }
    }

    switch (action.type) {

        case ADD_TOBACO_AND_ITEMS_IN_BLENDER:
            stateCopy.blender[action.items.name] = {
                name: action.items.name,
                tobacoItems: [action.items.tobacoItems]
            }

            return stateCopy

        case ADD_TOBACO_ITEMS_IN_BLENDER:

            stateCopy.blender[action.items.name].tobacoItems.push(action.items.tobacoItems);
            return stateCopy

        case DEL_TOBACO_ITEMS_FROM_BLENDER:
            if (stateCopy.blender[action.items.name].tobacoItems.length > 1) {
                stateCopy.blender[action.items.name].tobacoItems.splice(action.items.tobacoIndex, 1)
            } else {
                stateCopy.blender[action.items.name].tobacoItems.splice(action.items.tobacoIndex, 1)
                delete stateCopy.blender[action.items.name]
            }

            return stateCopy

        default: return state;
    }
}

//Action Creators
export const setTobacoItems = (list) => ({ type: SET_TOBACO_LIST, list })
export const AddInBlender = (items) => ({ type: ADD_TOBACO_AND_ITEMS_IN_BLENDER, items })
export const AddInBlenderOnlyItems = (items) => ({ type: ADD_TOBACO_ITEMS_IN_BLENDER, items })
export const dellItemFromBlender = (items) => ({ type: DEL_TOBACO_ITEMS_FROM_BLENDER, items })

//thunk



