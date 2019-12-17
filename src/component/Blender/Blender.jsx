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



  //  const blenderItems = Object.entries(blender).map(e => {
  //   console.log(e)
  //   //   const tobacoItems = e.tobacoItems.map(e => {
  //   //     return <Elements  >{e}</Elements >
  //   //   })
  //   //   return <div onClick={props.dellItem}>
  //   //     <div className={"tobaccoName"}>{e.name}</div>
  //   //     {tobacoItems}
  //   //   </div>
  //   // })
  // })

  return <BLenderWrapper>
    {blenderItems}
  </BLenderWrapper>;
};


