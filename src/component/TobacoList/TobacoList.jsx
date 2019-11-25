import React from "react";
import Element from "./TobaccoElement/TobaccoElement";
import { TobacoListWrapper, TobacoProducerName, TobacoElements } from "./tobacoList.styled"




const TobacoList = props => {
  let lineItems = []
  let tobaccoProducerName = "";

  if (!!props.tobacoElement) {
    tobaccoProducerName = props.tobacoElement.name
    lineItems = props.tobacoElement.items.map((e) => {
      return <Element
        dellItemFromBlender={props.dellItemFromBlender}
        name={e}
        tobacoName={props.tobacoName}
        addInBlender={props.addInBlender}
        blender={props.blender}
        AddInBlenderOnlyItems={props.AddInBlenderOnlyItems} />;
    })
  }

  return (
    <TobacoListWrapper >
      <TobacoProducerName>{tobaccoProducerName}</TobacoProducerName>
      <TobacoElements>{lineItems}</TobacoElements>
    </TobacoListWrapper>
  );
};

export default TobacoList;
