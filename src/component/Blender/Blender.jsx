import React from "react";
import styled from "styled-components";
import { BLenderWrapper } from "./blender.styled";

const Elements = styled.div`
&:hover {
  color: black;
  border-color: red;
  };
  color: red;
  cursor: pointer;
  
`;

export default ({ blender, dellItem }) => {


  const blenderItems = Object.entries(blender).map(e => {
    const tobacoItems = e[1].tobacoItems.map(e => <Elements  >{e}</Elements >)
    return <div onClick={dellItem}>
      <div className={"tobaccoName"}>{e[0]}</div>
      {tobacoItems}
    </div>
  })

  return <BLenderWrapper>
    {blenderItems}
  </BLenderWrapper>;
};


