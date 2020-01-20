import React from "react";
import styled from "styled-components"
import { TobacoListWrapper, TobaccoElementWrapper, TobacoElements } from "./tobacoList.styled"
import { TitleTobaccoName } from './../../assets/common/tittle';
import { TextELement } from './../../assets/common/texts';




export default ({ tobacoList, addTobacoblender }) => {
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

