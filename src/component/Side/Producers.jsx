import React from "react";
import { NavLink } from "react-router-dom";
import { ProducesrWrapper } from './Produsers.styled';
import PropTypes from 'prop-types';

const producers = ["Adalya", "Afzal", "Alfakher", "DailyHookah", "DarkSide", "DiGusto", "Duft",
  "Element", "Fumari", "JustSmoke", "MattPear", "MustHave", "Nakhla", "NewYorker", "Sarkozy", "Satyr", "Serbetli",
  "Spectrum", "Tangier' s", "WTO", "Северный"]

const Producers = ({ activeSide }) => {
  const TobacoProducers = producers.map((elem) => <nav><NavLink to={`/tobacco/${elem}`}>{elem}</NavLink></nav>)
  return (
    <ProducesrWrapper activeSide={activeSide}>
      {TobacoProducers}
    </ProducesrWrapper>
  );
};

Producers.propTypes = {
  activeSide: PropTypes.bool
}

export default Producers;

