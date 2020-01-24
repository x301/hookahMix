import React from "react";
import { NavLink } from "react-router-dom";
import { ProducesrWrapper } from './Produsers.styled';
import PropTypes from 'prop-types';

const producers = ["Adalya", "Afzal", "Alfakher", "Daily Hookah", "DarkSide", "Di Gusto", "Duft",
  "Element", "Fumari", "Just Smoke", "Matt Pear", "MustHave", "Nakhla", "New Yorker", "Sarkozy", "Satyr", "Serbetli",
  "Spectrum", "Tangier's", "WTO", "Северный"]

const Producers = ({ activeSide }) => {
  const TobacoProducers = producers.map((elem, i) => <nav key={i}><NavLink to={`/tobacco/${elem.split(' ').join('')}`}>{elem}</NavLink></nav>)
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

