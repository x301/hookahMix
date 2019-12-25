import React from "react";
import TobacoList from "./TobacoList";
import { useSelector } from "react-redux";
import { AddInBlender, AddInBlenderOnlyItems, dellItemFromBlender } from "./tobacoList-reducer";
import { useParams } from "react-router-dom"
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'


const TobacoListContainer = ({ dispatch }) => {

  const tobacoName = useParams().id

  const getTobacoList = useSelector((({ firestore }) => {
    return firestore.data.HookahProducers && firestore.data.HookahProducers[tobacoName]

  }))
  useFirestoreConnect(() => {
    if (!!(getTobacoList)) {

      if (!(getTobacoList.name === tobacoName)) {
        return `HookahProducers/${tobacoName}`
      }
    } else {
      return `HookahProducers/${tobacoName}`
    }
  }, [tobacoName])


  const getBlender = useSelector((state) => state.tobacoListPage.blender)

  const addTobacoBlender = (event) => {

    const currentTobaco = event.currentTarget.textContent
    if (getBlender[getTobacoList.name]) {
      const findTobaco = getBlender[getTobacoList.name].tobacoItems.find(e => e === currentTobaco)
      !(findTobaco) && dispatch(AddInBlenderOnlyItems({
        name: getTobacoList.name,
        tobacoItems: event.currentTarget.textContent
      }))

    } else {
      dispatch(AddInBlender({
        name: getTobacoList.name,
        tobacoItems: event.currentTarget.textContent
      }))
    }
  }


  return (
    isLoaded(getTobacoList) ?
      <TobacoList
        tobacoList={!!(getTobacoList) && getTobacoList} addTobacoblender={addTobacoBlender}
      >

      </TobacoList> : "loading"
  )
}

export default TobacoListContainer

