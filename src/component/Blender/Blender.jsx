import React from "react";
import styled from "styled-components";
import { BLenderWrapper, BlenderCounter } from "./blender.styled";


export default ({ blender, dellItem, activeMenu, getBlenderCount }) => {

  const blenderItems = Object.entries(blender).map(e => {
    const tobacoItems = e[1].tobacoItems.map(e => <span>{e}</span>)
    return <div onClick={dellItem}>
      <span className={"tobaccoName"} >{e[0].concat(":")}</span>
      {tobacoItems}
    </div>
  })

  return <BLenderWrapper activeMenu={activeMenu}>
    <BlenderCounter>
      <p>{getBlenderCount ? `В миксере ${getBlenderCount} вкусов` : `В миксере нет вкусов`}</p>
    </BlenderCounter>
    {blenderItems}
  </BLenderWrapper>;
};


