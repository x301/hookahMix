import React, { useState, useEffect } from "react";
import { Mixes } from './Mixes';
import { useSelector, useDispatch } from 'react-redux';
import { getMixes } from "../Mixes/mixes-reducer"
import { isEmpty, isLoaded } from 'react-redux-firebase'
import Paginator from "../../common/Paginator/Paginator";


const MixesContainer = () => {
    const getFindMixes = useSelector(state => state.mixesListPage.mixes)
    const [currentPage, SetCurrentPage] = useState(1);
    const [mixesPerPage] = useState(8)

    //Get current posts
    const indexOfLastMix = currentPage * mixesPerPage
    const indexOfFirstMix = indexOfLastMix - mixesPerPage;



    const currentMix = !!(getFindMixes) ? getFindMixes.slice(indexOfFirstMix, indexOfLastMix) : "";
    //Change page
    const paginate = (number, event) => {
        SetCurrentPage(number)
    };

    return (
        !isEmpty(getFindMixes) ?
            isLoaded(getFindMixes) ? <Mixes totalMixes={getFindMixes} currentMix={currentMix} mixesPerPage={mixesPerPage} paginate={paginate} ></Mixes> : "Mixes not found"
            : "Not found"
    )
}

export default MixesContainer