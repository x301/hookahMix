import React from "react";
import { dellItemFromBlender } from "../TobacoList/tobacoList-reducer"

import { useSelector } from "react-redux";
import Blender from "./Blender";




const BlenderContainer = ({ dispatch, activeBlender, getBlenderCount }) => {
  console.log("blender")
  const getBlender = useSelector(state => state.tobacoListPage.blender)

  const dellTobacoItem = (event) => {

    const name = event.target.parentNode.querySelector(".tobaccoName").textContent.slice(0, -1);
    const tobacoIndex = getBlender[name].tobacoItems.indexOf(event.target.textContent)

    if (!(tobacoIndex === -1)) {
      dispatch(dellItemFromBlender({
        name,
        tobacoIndex
      }))
    }


  }
  return <Blender blender={getBlender} dellItem={dellTobacoItem} activeBlender={activeBlender} getBlenderCount={getBlenderCount} />;
};

export default BlenderContainer


