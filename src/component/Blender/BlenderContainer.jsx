import React from "react";
import { dellItemFromBlender, dellAllBlenderItems } from "../TobacoList/tobacoList-reducer"

import { useSelector } from "react-redux";
import Blender from "./Blender";




const BlenderContainer = ({ dispatch }) => {

  const getBlender = useSelector(state => state.tobacoListPage.blender)
  const getBlenderActiveMenu = useSelector(state => state.tobacoListPage.activeStatus)
  const getBlenderCount = useSelector(state => state.tobacoListPage.blenderCount)

  const dellAllItemsFromBlender = () => dispatch(dellAllBlenderItems());

  const dellTobacoItem = (event) => {
    const name = event.target.parentNode.querySelector(".tobaccoName").textContent.slice(0, -1);
    const findTobaco = getBlender[name].tobacoItems.indexOf(event.target.textContent)

    if (!(findTobaco === -1)) {
      dispatch(dellItemFromBlender({
        name: name,
        tobacoItems: findTobaco
      }))
    }


  }
  return <Blender blender={getBlender}
    dellItem={dellTobacoItem}
    activeMenu={getBlenderActiveMenu}
    getBlenderCount={getBlenderCount}
    dellAllitems={dellAllItemsFromBlender} />;
};

export default BlenderContainer


