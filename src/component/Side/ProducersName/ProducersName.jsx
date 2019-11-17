import React from "react";
import { NavLink } from "react-router-dom";

const Items = props => {
  return (
    <div>
      <NavLink to={props.name}>{props.name}</NavLink>
    </div>
  );
};

export default Items;
