import React from "react";
import { useSelector } from "react-redux";
import Producers from "./Producers";





const ProducersContainer = () => {
  const getStatusSide = useSelector(state => state.producersPage.activeSide)
  return (
    <Producers activeSide={getStatusSide}></Producers>
  )
}
export default ProducersContainer;



