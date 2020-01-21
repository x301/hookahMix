import React from "react";
import styled from "styled-components"
import { TobacoListWrapper, TobaccoElementWrapper, TobacoElements } from "./tobacoList.styled"
import { TitleTobaccoName } from './../../assets/common/tittle';
import { TextELement } from './../../assets/common/texts';
import PropTypes from 'prop-types';


const TobacoList = ({ tobacoList, addTobacoblender }) => {
  return (
    <TobacoListWrapper >
      <TitleTobaccoName>{tobacoList.name}</TitleTobaccoName>
      <TobacoElements>{tobacoList.tobacoItems.map((e, i) =>
        <TobaccoElementWrapper key={i} onClick={addTobacoblender}>
          <TextELement>{e}</TextELement>
        </TobaccoElementWrapper>
      )}</TobacoElements>
    </TobacoListWrapper>
  );
};

export default TobacoList;

TobacoList.propTypes = {
  tobacoList: PropTypes.array.isRequired,
  addTobacoblender: PropTypes.func
}