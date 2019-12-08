import React, { useEffect } from "react";
import { compose } from "redux"
import TobacoList from "./TobacoList";
import { connect } from "react-redux";
import { getTobacoItems, AddInBlender, AddInBlenderOnlyItems, dellItemFromBlender } from "./tobacoList-reducer";
import { useLocation, useParams } from "react-router-dom"
import { getTobaco } from "./selectors";




const mapStateToProps = (state) => {

  return {
    tobacoList: getTobaco(state),

  }
}

const TobacoListContainer = (props) => {

  const location = useLocation()

  const tobacoName = useParams().id

  const tobacoActiveElement = props.tobacoList.tobacoItems.find(e => e.name === tobacoName)

  useEffect(() => {
    if (!tobacoActiveElement) {

      props.getTobacoItems(tobacoName)
    }

  }, [location.pathname])


  return (
    <TobacoList
      tobacoItems={props.tobacoList.tobacoItems}
      tobacoActiveElement={tobacoActiveElement}
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
