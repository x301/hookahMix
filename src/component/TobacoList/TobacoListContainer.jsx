import React, { useEffect } from "react";
import { compose } from "redux"
import TobacoList from "./TobacoList";
import { connect } from "react-redux";
import { getTobacoItems, AddInBlender, AddInBlenderOnlyItems, dellItemFromBlender } from "./tobacoList-reducer";
import { useLocation, useParams } from "react-router-dom"
import { getTobaco } from "./selectors";




let mapStateToProps = (state) => {

  return {
    tobacoList: getTobaco(state),


  }
}

const TobacoListContainer = (props) => {
  const location = useLocation()

  const tobacoName = useParams()

  const tobacoElement = props.tobacoList.tobacoItems.find(e => e.name === tobacoName.id)

  useEffect(() => {
    if (!tobacoElement) {
      props.getTobacoItems(location.pathname)
    }

  }, [location.pathname])


  return (
    <TobacoList
      tobacoItems={props.tobacoList.tobacoItems}
      tobacoElement={tobacoElement}
      tobacoName={tobacoName}
      addInBlender={props.AddInBlender}
      blender={props.tobacoList.blender}
      AddInBlenderOnlyItems={props.AddInBlenderOnlyItems}
      dellItemFromBlender={props.dellItemFromBlender}></TobacoList>
  )
}

export default compose(
  connect(mapStateToProps, { getTobacoItems, AddInBlender, AddInBlenderOnlyItems, dellItemFromBlender }),
)(TobacoListContainer);;
