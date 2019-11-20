import React from "react";
import s from "./Producers.module.css";
import { NavLink } from "react-router-dom";
const Producers = props => {

  return (
    <div className={s.wrapper}>
      <div className={s.tobacoProducer}>
        <div>
          <NavLink to="/Adalia">Adalia</NavLink>
        </div>
        <div>
          <NavLink to="/Alfacker">Alfacker</NavLink>
        </div>
        <div>
          <NavLink to="/DarkSide">DarkSide</NavLink>
        </div>

      </div>
    </div>
  );
};

export default Producers;
