import React from "react";

import { connect } from "react-redux";
import Blender from "./Blender";

const mapStateToProps = (state) => {
  console.log(state)
  return {
    blender: state.tobacoList.blender
  }
}

const BlenderWith = props => {
  return <Blender blender={props.blender} />;
};

const BlenderContainer = connect(mapStateToProps)(BlenderWith)

export default BlenderContainer;
