import React from "react";
import { dellItemFromBlender } from "../TobacoList/tobacoList-reducer"

import { connect } from "react-redux";
import Blender from "./Blender";


const mapStateToProps = (state) => {
  return {
    blender: state.tobacoList.blender
  }
}

const BlenderContainer = props => {
  const dellTobacoItem = (event) => {
    const item = {
      name: event.target.parentNode.querySelector(".tobaccoName").textContent,
      tobacoItems: [event.target.textContent]
    }
    props.dellItemFromBlender(item)
  }
  return <Blender blender={props.blender} dellItem={dellTobacoItem} />;
};

export default connect(mapStateToProps, { dellItemFromBlender })(BlenderContainer)


