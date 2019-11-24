//Actions
import { tobacoApi } from './../../api/firebase';

const SET_TOBACO_LIST = "components/tobacoList/GETTOBACOLIST";
const ADD_TOBACO_AND_ITEMS_IN_BLENDER = "components/blender/ADDTOBACOANDITEMSINBLENDER"
const ADD_TOBACO_ITEMS_IN_BLENDER = "components/blender/ADDTOBACOITEMINBLENDER"
const DEL_TOBACO_ITEMS_FROM_BLENDER = "components/blender/DELTOBACOITEMSFROMBLENDER"

const initialState = {
    tobacoItems: [

    ],
    blender: [
    ]

};


//Reducer
export const tobacoListReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        tobacoItems: [...state.tobacoItems],
        blender: [...state.blender]
    }

    switch (action.type) {
        case SET_TOBACO_LIST:

            stateCopy.tobacoItems.push(action.list)

            return stateCopy

        case ADD_TOBACO_AND_ITEMS_IN_BLENDER:
            stateCopy.blender.push(action.items)

            return stateCopy

        case ADD_TOBACO_ITEMS_IN_BLENDER:

            stateCopy.blender.find(e => e.name === action.items.name).tobacoItems.push(action.items.tobacoItems[0])

            return stateCopy

        case DEL_TOBACO_ITEMS_FROM_BLENDER:
            stateCopy.blender.forEach((e, i) => {

                if (e.name === action.items.name) {
                    const index = e.tobacoItems.indexOf(action.items.tobacoItems[0], 0)
                    e.tobacoItems.splice(index, 1)
                    if (e.tobacoItems.length === 0) {
                        stateCopy.blender.splice(i, 1)
                    }

                }

            });

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
export const getTobacoItems = (location) => (dispatch) => {
    tobacoApi.getTobacoItems(location).then(data => {

        dispatch(setTobacoItems(data))
    })
}

