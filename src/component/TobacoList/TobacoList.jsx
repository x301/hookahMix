import React from "react";
import Element from "./TobaccoElement/TobaccoElement";
import { TobacoListWrapper, TobacoProducerName, TobacoElements } from "./tobacoList.styled"




const TobacoList = props => {
  let lineItems = []
  let tobaccoProducerName = "";
  let filter = props.tobacoItems.filter(e => e.name === props.name.id)
  if (filter.length !== 0) {
    tobaccoProducerName = filter[0].name
    lineItems = filter[0].items.map((e) => {
      return <Element delItemFromBlender={props.delItemFromBlender} name={e} tobacoName={props.tobacoName} addInBlender={props.addInBlender} blender={props.blender} AddInBlenderOnlyItems={props.AddInBlenderOnlyItems} />;
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
