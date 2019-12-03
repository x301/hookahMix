import React from "react";
import s from "./Producers.module.css";
import { NavLink } from "react-router-dom";
export default props => {

  return (
    <div className={s.wrapper}>
      <div className={s.tobacoProducer}>
        <div>
          <NavLink to="/tobacco/Adalia">Adalia</NavLink>
        </div>
        <div>
          <NavLink to="/tobacco/Alfacker">Alfacker</NavLink>
        </div>
        <div>
          <NavLink to="/tobacco/DarkSide">DarkSide</NavLink>
        </div>

      </div>
    </div>
  );
};


