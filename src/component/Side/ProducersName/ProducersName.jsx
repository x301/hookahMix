import React from "react";
import { NavLink } from "react-router-dom";

export default props => {
  return (
    <div>
      <NavLink to={props.name}>{props.name}</NavLink>
    </div>
  );
};


