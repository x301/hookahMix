import React from "react";
import { dellItemFromBlender } from "../TobacoList/tobacoList-reducer"

import { useSelector } from "react-redux";
import Blender from "./Blender";




const BlenderContainer = ({ dispatch }) => {
  const getBlender = useSelector(state => state.tobacoListPage.blender)
  const dellTobacoItem = (event) => {

    const name = event.target.parentNode.querySelector(".tobaccoName").textContent;
    const tobacoIndex = getBlender[name].tobacoItems.indexOf(event.target.textContent)


    dispatch(dellItemFromBlender({
      name,
      tobacoIndex
    }))

  }
  return <Blender blender={getBlender} dellItem={dellTobacoItem} />;
};

export default BlenderContainer


