import React from "react";
import { NavLink } from "react-router-dom";
import { ProducesrWrapper } from './Produsers.styled';
export default props => {

  return (
    <ProducesrWrapper>
      <div>
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
    </ProducesrWrapper>
  );
};


