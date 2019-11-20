import React, { useEffect } from "react";
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


const TobaccoElement = props => {
  useEffect(() => console.log("Перерисовался"))
  const addTobacoBlender = (event) => {
    const item = {
      name: props.tobacoName.id,
      tobacoItems: [event.currentTarget.textContent]
    }
    console.log(item.tobacoItems.split(','))
    const blenderElem = props.blender.find(e => e.name === item.name)
    console.log(props.blender.filter(e => e.name === item.name))
    if (!!blenderElem) {
      blenderElem.tobacoItems.filter(e => e === item.tobacoItems[0]).length > 0 || props.AddInBlenderOnlyItems(item);
    } else {
      console.log("нет такого табака")
      props.addInBlender(item)
    }


  }
  return <Elements onClick={addTobacoBlender}>{props.name}</Elements>;
};
export default TobaccoElement;