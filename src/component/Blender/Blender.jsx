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

const Blender = props => {
  const dellTobacoItem = (event) => {
    const item = {
      name: event.target.parentNode.querySelector(".tobaccoName").textContent,
      tobacoItems: [event.target.textContent]
    }

    props.dellItem(item)
  }
  const blenderItems = props.blender.map(e => {
    const tobacoItems = e.tobacoItems.map(e => {
      return <Elements  >{e}</Elements >
    })
    return <div onClick={dellTobacoItem}>
      <div className={"tobaccoName"}>{e.name}</div>
      {tobacoItems}
    </div>
  })

  return <BLenderWrapper>
    <div>
      <div >
        {blenderItems}

      </div >
    </div>
  </BLenderWrapper>;
};

export default Blender;
