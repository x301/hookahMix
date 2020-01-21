import React from "react";
import { NavLink } from "react-router-dom";
import { ProducesrWrapper } from './Produsers.styled';
import PropTypes from 'prop-types';

const Producers = ({ activeSide }) => {
  return (
    <ProducesrWrapper activeSide={activeSide}>
      <nav>
        <NavLink to="/tobacco/Adalya">Adalya</NavLink>
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

Producers.propTypes = {
  activeSide: PropTypes.bool
}

export default Producers;

