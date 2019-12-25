import React from "react";
import { NavLink } from "react-router-dom";
import { ProducesrWrapper } from './Produsers.styled';
export default ({ activeSide, setActiveSide }) => {

  return (
    <ProducesrWrapper activeSide={activeSide} onClick={() => setActiveSide(!activeSide)}>
      <nav>
        <NavLink to="/tobacco/Adalia">Adalia</NavLink>
      </nav>
      <nav>
        <NavLink to="/tobacco/Alfacker">Alfacker</NavLink>
      </nav>
      <nav>
        <NavLink to="/tobacco/DarkSide">DarkSide</NavLink>
      </nav>

    </ProducesrWrapper>
  );
};


