import React from "react";
import s from "./Blender.module.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    blender: state.blender
  }
}

const BlenderWith = props => {
  return <Blender tobacoName={props.blender.name} tobacoItems={props.blender.tobacoItems} />;
};

const BlenderContainer = connect(mapStateToProps, {})(BlenderWith)

export default BlenderContainer;
