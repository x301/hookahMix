import React from "react";
import { setTobacoListAC } from "../TobacoList/tobacoList-reducer";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
  return {
    producersName: state.tobacoList.tobacoProducers
  }
}

let mapDispatchToProps =(dispatch) => {
  return {
    setTobacoList: (tobacoLIst) => {
      dispatch(setTobacoListAC(tobacoLIst))
      //console.log(tobacoLIst)
    }
  }
 }

 const ProducersContainer = connect(mapStateToProps,mapDispatchToProps )(Producers) 




