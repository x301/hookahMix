import React, { useEffect } from "react";
import TobacoList from "./TobacoList";
import { useSelector } from "react-redux";
import { addInBlender, addInBlenderOnlyItems, dellItemFromBlender } from "./tobacoList-reducer";
import { useParams } from "react-router-dom"
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import MainPreloader from "../../common/MainPreloader/MainPreloader";
import { setDeactiveteSide } from './../../component/Side/producers-reducer';

const TobacoListContainer = ({ dispatch }) => {
  const tobacoName = useParams().id
  const getTobacoList = useSelector((({ firestore }) => {
    return firestore.data.HookahProducers && firestore.data.HookahProducers[tobacoName]

  }))
  useFirestoreConnect(() => {
    dispatch(setDeactiveteSide());
    if (!!(getTobacoList)) {

      if (!(getTobacoList.name === tobacoName)) {
        return `HookahProducers/${tobacoName}`
      }
    } else {
      return `HookahProducers/${tobacoName}`
    }
  }, [tobacoName])

  useEffect(() => {

  }, [tobacoName])

  const getBlender = useSelector((state) => state.tobacoListPage.blender)

  const addTobacoBlender = (event) => {

    const currentTobaco = event.currentTarget.textContent
    if (getBlender[getTobacoList.name]) {
      const findTobaco = getBlender[getTobacoList.name].tobacoItems.indexOf(currentTobaco)

      if (findTobaco === -1) {
        dispatch(addInBlenderOnlyItems({
          name: getTobacoList.name,
          tobacoItems: event.currentTarget.textContent
        }))
      } else {
        dispatch(dellItemFromBlender({
          name: getTobacoList.name,
          tobacoItems: findTobaco
        }))
      }

    } else {
      dispatch(addInBlender({
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

      </TobacoList> : <MainPreloader></MainPreloader>
  )
}

export default TobacoListContainer

