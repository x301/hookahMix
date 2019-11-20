import React from "react";
import { BLenderWrapper } from "./blender.styled";

const Blender = props => {

  const blenderItems = props.blender.map(e => {
    const tobacoItems = e.tobacoItems.map(e => {
      return <div>{e}</div >
    })
    return <div>
      {e.name}
      <div>{tobacoItems}</div>
    </div>
  })

  return <BLenderWrapper>
    <div>
      <div>
        {blenderItems}

      </div>
    </div>
  </BLenderWrapper>;
};

export default Blender;
