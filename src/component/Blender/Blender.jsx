import React from "react";
import { BLenderWrapper, BlenderCounterWrapper, BLenderItems } from "./blender.styled";
import { CleanBlenderBtn } from "../../assets/common/buttons";
import cleanActiveBtn from "../../assets/img/clean-icon-red.png";
import cleanBtn from "../../assets/img/clean-icon-black.png";
import { TextELement } from './../../assets/common/texts';
import changeStr from "../../assets/utils/changeStr"

export default ({ blender, dellItem, activeMenu, getBlenderCount, dellAllitems }) => {
  const strVariable = ["вкус", "вкусов"]
  const blenderItems = Object.entries(blender).map(e => {
    const tobacoItems = e[1].tobacoItems.map((e, i) => <BLenderItems key={i}>{e}</BLenderItems>)
    return <div key={e[0]} onClick={dellItem}>
      <BLenderItems className={"tobaccoName"} >{e[0].concat(":")}</BLenderItems>
      {tobacoItems}
    </div>
  })

  return <BLenderWrapper activeMenu={activeMenu}>
    <BlenderCounterWrapper>
      <span onClick={dellAllitems}><img src={blenderItems.length ? cleanActiveBtn : cleanBtn}></img></span>
      <span><p>{getBlenderCount ? `В миксере ${getBlenderCount} ${changeStr(strVariable, getBlenderCount)}` : `В миксере нет вкусов`}</p></span>
    </BlenderCounterWrapper>
    <TextELement></TextELement>
    {blenderItems}
  </BLenderWrapper>;
};


