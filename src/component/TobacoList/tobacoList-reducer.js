//Actions

const SET_TOBACO_LIST = "components/tobacoList/GETTOBACOLIST";
const ADD_TOBACO_AND_ITEMS_IN_BLENDER = "components/blender/ADDTOBACOANDITEMSINBLENDER";
const ADD_TOBACO_ITEMS_IN_BLENDER = "components/blender/ADDTOBACOITEMINBLENDER";
const DEL_TOBACO_ITEMS_FROM_BLENDER = "components/blender/DELTOBACOITEMSFROMBLENDER";
const SET_ACTIVE_MOBILE_MENU_BLENDER = "components/blender/SETACTIVEMOBILEMENUBLENDER";
const SET_DEACTIVETE_MOBILE_MENU_BLENDER = "components/blender/SETACTIVETEMOBILEMENUBLENDER";
const DEL_ALL_BLENDER_ITEMS = "components/blender/DELALLBLENDERITEMS";

const initialState = {
    blender: {

    },
    blenderCount: 0,
    activeStatus: true
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
            stateCopy.blenderCount++;

            return stateCopy

        case ADD_TOBACO_ITEMS_IN_BLENDER:

            stateCopy.blender[action.items.name].tobacoItems.push(action.items.tobacoItems);
            stateCopy.blenderCount++;

            return stateCopy

        case DEL_TOBACO_ITEMS_FROM_BLENDER:
            console.log(action.items)
            if (stateCopy.blender[action.items.name].tobacoItems.length > 1) {

                stateCopy.blender[action.items.name].tobacoItems.splice(action.items.tobacoItems, 1)

            } else {

                stateCopy.blender[action.items.name].tobacoItems.splice(action.items.tobacoItems, 1)
                delete stateCopy.blender[action.items.name]
            }
            stateCopy.blenderCount && stateCopy.blenderCount--;

            return stateCopy

        case DEL_ALL_BLENDER_ITEMS:

            stateCopy.blender = {

            };
            stateCopy.blenderCount = 0;
            return stateCopy

        case SET_ACTIVE_MOBILE_MENU_BLENDER:

            return state = {
                ...state,
                activeStatus: true
            }
        case SET_DEACTIVETE_MOBILE_MENU_BLENDER:

            return state = {
                ...state,
                activeStatus: false
            }

        default: return state;
    }
}

//Action Creators
export const setTobacoItems = (list) => ({ type: SET_TOBACO_LIST, list })
export const addInBlender = (items) => ({ type: ADD_TOBACO_AND_ITEMS_IN_BLENDER, items })
export const addInBlenderOnlyItems = (items) => ({ type: ADD_TOBACO_ITEMS_IN_BLENDER, items })
export const dellItemFromBlender = (items) => ({ type: DEL_TOBACO_ITEMS_FROM_BLENDER, items })
export const setActiveBlender = () => ({ type: SET_ACTIVE_MOBILE_MENU_BLENDER })
export const setDeactiveteBlender = () => ({ type: SET_DEACTIVETE_MOBILE_MENU_BLENDER })
export const dellAllBlenderItems = () => ({ type: DEL_ALL_BLENDER_ITEMS })
//thunk



