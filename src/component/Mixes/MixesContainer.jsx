import React, { useState, useEffect } from "react";
import { Mixes } from './Mixes';
import { useSelector } from 'react-redux';

import { isEmpty } from 'react-redux-firebase'
import MainPreloader from "../../common/MainPreloader/MainPreloader";



const MixesContainer = () => {

    const isFetching = useSelector(state => state.mixesListPage.isFetching)

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

    useEffect(() => {

    }, [])

    return (
        isFetching ?
            !isEmpty(getFindMixes) ?
                <Mixes totalMixes={getFindMixes} currentMix={currentMix} mixesPerPage={mixesPerPage} paginate={paginate} ></Mixes>
                : "Not found" : <MainPreloader></MainPreloader>
    )
}

export default MixesContainer