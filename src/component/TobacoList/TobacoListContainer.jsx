import React, { useEffect } from "react";
import TobacoList from "./TobacoList";
import { connect } from "react-redux";
import { getTobacoItems, AddInBlender, AddInBlenderOnlyItems } from "./tobacoList-reducer";
import { useLocation, useParams } from "react-router-dom"


let mapStateToProps = (state) => {

  return {
    tobacoList: state.tobacoList

  }
}



const TobacoListWith = (props) => {
  const location = useLocation()

  const tobacoName = useParams()

  const { tobacoList, getTobacoItems } = props

  useEffect(() => {
    if (tobacoList.tobacoItems.filter(e => e.name === tobacoName.id).length === 0) {
      getTobacoItems(location.pathname)
    }

  }, [location.pathname])


  return (
    <TobacoList name={tobacoName} tobacoItems={props.tobacoList.tobacoItems} tobacoName={tobacoName} addInBlender={props.AddInBlender} blender={props.tobacoList.blender} AddInBlenderOnlyItems={props.AddInBlenderOnlyItems}></TobacoList>
  )
}
const TobacoListContainer = connect(mapStateToProps, { getTobacoItems, AddInBlender, AddInBlenderOnlyItems })(TobacoListWith)

export default TobacoListContainer;
