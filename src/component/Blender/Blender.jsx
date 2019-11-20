import React from "react";
import { BLenderWrapper } from "./blender.styled";

const Blender = props => {


  return <BLenderWrapper>
    <div>
      <div>
        {props.tobacoName}
      </div>
      <div>
        {props.tobacoItems}
      </div>
    </div>
  </BLenderWrapper>;
};

export default Blender;
