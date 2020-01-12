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
        <NavLink to="/tobacco/Afzal">Afzal</NavLink>
      </nav>

      <nav>
        <NavLink to="/tobacco/Alfakher">Alfakher</NavLink>
      </nav>

      <nav>
        <NavLink to="/tobacco/DailyHookah">Daily Hookah</NavLink>
      </nav>

      <nav>
        <NavLink to="/tobacco/DarkSide">DarkSide</NavLink>
      </nav>

      <nav>
        <NavLink to="/tobacco/DiGusto">Di Gusto</NavLink>
      </nav>

      <nav>
        <NavLink to="/tobacco/Duft">Duft</NavLink>
      </nav>

      <nav>
        <NavLink to="/tobacco/Element">Element</NavLink>
      </nav>

      <nav>
        <NavLink to="/tobacco/Fumari">Fumari</NavLink>
      </nav>

      <nav>
        <NavLink to="/tobacco/JustSmoke">Just Smoke</NavLink>
      </nav>


    </ProducesrWrapper>
  );
};


