import React from "react";
import { BLenderWrapper, BlenderCounterWrapper, BLenderItems } from "./blender.styled";
import { CleanBlenderBtn } from "../../assets/common/buttons";
import cleanActiveBtn from "../../assets/img/clean-icon-red.png";
import cleanBtn from "../../assets/img/clean-icon-black.png";


export default ({ blender, dellItem, activeMenu, getBlenderCount }) => {

  const blenderItems = Object.entries(blender).map(e => {
    const tobacoItems = e[1].tobacoItems.map(e => <BLenderItems>{e}</BLenderItems>)
    return <div onClick={dellItem}>
      <BLenderItems className={"tobaccoName"} >{e[0].concat(":")}</BLenderItems>
      {tobacoItems}
    </div>
  })

  return <BLenderWrapper activeMenu={activeMenu}>
    <BlenderCounterWrapper>
      <span><img src={blenderItems.length ? cleanActiveBtn : cleanBtn}></img></span>
      <span><p>{getBlenderCount ? `В миксере ${getBlenderCount} вкусов` : `В миксере нет вкусов`}</p></span>
    </BlenderCounterWrapper>
    {blenderItems}
  </BLenderWrapper>;
};


