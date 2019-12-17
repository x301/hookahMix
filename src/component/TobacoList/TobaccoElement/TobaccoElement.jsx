import React from "react";
import styled from "styled-components"
const Elements = styled.div`
&:hover {
  color: black;
  border-color: red;
  };
  color: red;
  cursor: pointer;
  border:1px solid black;
`;


export default ({ tobacoElement, ...props }) => {
  console.log(props)




  return <Elements >{tobacoElement}</Elements>;
};
