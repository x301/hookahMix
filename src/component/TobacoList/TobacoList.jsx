import React from "react";
import styled from "styled-components"
import { TobacoListWrapper, TobaccoElementWrapper, TobacoElements } from "./tobacoList.styled"
import { TitleTobaccoName, PageTittle } from './../../assets/common/tittle';
import { TextELement } from './../../assets/common/texts';




export default ({ tobacoList, addTobacoblender }) => {
  return (
    <TobacoListWrapper >
      <PageTittle><h1>{tobacoList.name}</h1></PageTittle>
      <TobacoElements>{tobacoList.tobacoItems.map(e =>
        <TobaccoElementWrapper onClick={addTobacoblender}>
          <TextELement>{e}</TextELement>
        </TobaccoElementWrapper>
      )}</TobacoElements>
    </TobacoListWrapper>
  );
};

