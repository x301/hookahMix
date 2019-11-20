//Actions
import { tobacoApi } from './../../api/firebase';

const SET_TOBACO_LIST = "components/tobacoList/GETTOBACOLIST";
const ADD_TOBACO_AND_ITEMS_IN_BLENDER = "components/blender/ADDTOBACOANDITEMSINBLENDER"
const ADD_TOBACO_ITEMS_IN_BLENDER = "components/blender/ADDTOBACOITEMINBLENDER"

const initialState = {
    tobacoItems: [

    ],
    blender: [{
        name: "Adalia",
        tobacoItems: ["asd"],
    }
    ]

};


//Reducer
export const tobacoListReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        tobacoItems: [...state.tobacoItems],
        blender: [...state.blender]
    }
    console.log(stateCopy.blender)
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





        default: return state;
    }
}

//Action Creators
export const setTobacoItems = (list) => ({ type: SET_TOBACO_LIST, list })
export const AddInBlender = (items) => ({ type: ADD_TOBACO_AND_ITEMS_IN_BLENDER, items })
export const AddInBlenderOnlyItems = (items) => ({ type: ADD_TOBACO_ITEMS_IN_BLENDER, items })

//thunk
export const getTobacoItems = (location) => (dispatch) => {
    tobacoApi.getTobacoItems(location).then(data => {

        dispatch(setTobacoItems(data))
    })
}

