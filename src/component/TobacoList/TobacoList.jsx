import React from "react";
import Element from "./TobaccoElement/TobaccoElement";
import { TobacoListWrapper, TobacoProducerName, TobacoElements } from "./tobacoList.styled"




export default props => {

  let lineItems = []
  let tobaccoProducerName = "";

  if (!!props.tobacoActiveElement) {

    tobaccoProducerName = props.tobacoActiveElement.name

    lineItems = props.tobacoActiveElement.tobacoItems.map((e) => {

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

