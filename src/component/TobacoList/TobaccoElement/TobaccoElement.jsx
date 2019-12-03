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


export default props => {
  const addTobacoBlender = (event) => {
    const item = {
      name: props.tobacoName.id,
      tobacoItems: [event.currentTarget.textContent]
    }
    const blenderElem = props.blender.find(e => e.name === item.name)

    if (!!blenderElem) {
      blenderElem.tobacoItems.filter(e => e === item.tobacoItems[0]).length > 0 ? props.dellItemFromBlender(item) : props.AddInBlenderOnlyItems(item);
    } else {

      props.addInBlender(item)
    }


  }
  return <Elements onClick={addTobacoBlender}>{props.name}</Elements>;
};
