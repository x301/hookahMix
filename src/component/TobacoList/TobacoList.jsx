import React from "react";
import styled from "styled-components"
//import Element from "./TobaccoElement/TobaccoElement";
import { TobacoListWrapper, TobacoProducerName, TobacoElements } from "./tobacoList.styled"

const Element = styled.div`
&:hover {
  color: black;
  border-color: red;
  };
  color: red;
  cursor: pointer;
  border:1px solid black;
`;


export default ({ tobacoList, addTobacoblender, ...props }) => {
  return (
    <TobacoListWrapper >
      <TobacoProducerName>{tobacoList.name}</TobacoProducerName>
      <TobacoElements>{tobacoList.tobacoItems.map(e => <Element onClick={addTobacoblender}>{e}</Element>
      )}</TobacoElements>
    </TobacoListWrapper>
  );
};

