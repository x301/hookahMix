import React from "react";
import { dellItemFromBlender } from "../TobacoList/tobacoList-reducer"

import { connect } from "react-redux";
import Blender from "./Blender";


const mapStateToProps = (state) => {
  return {
    blender: state.tobacoList.blender
  }
}

const BlenderWith = props => {
  return <Blender blender={props.blender} dellItem={props.dellItemFromBlender} />;
};

const BlenderContainer = connect(mapStateToProps, { dellItemFromBlender })(BlenderWith)

export default BlenderContainer;
