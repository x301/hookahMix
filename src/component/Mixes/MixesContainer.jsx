import React, { useState, useEffect } from "react";
import { Mixes } from './Mixes';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'react-redux-firebase'
import MainPreloader from "../../common/MainPreloader/MainPreloader";
import { setDeactiveteSide } from './../../component/Side/producers-reducer';
import { setDeactiveteBlender } from '../../component/TobacoList/tobacoList-reducer';
import { setMix } from "./DescribeMixes/describe-reducer"
const MixesContainer = () => {
    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.mixesListPage.isFetching)
    const getFindMixes = useSelector(state => state.mixesListPage.mixes)

    const [currentPage, SetCurrentPage] = useState(1);
    const [mixesPerPage] = useState(6);
    const [openFullMix, SetOpenFullMix] = useState(false);
    //Get current mix
    const indexOfLastMix = currentPage * mixesPerPage
    const indexOfFirstMix = indexOfLastMix - mixesPerPage;
    const currentMix = !!(getFindMixes) ? getFindMixes.slice(indexOfFirstMix, indexOfLastMix) : "";

    //Change page
    const paginate = (number) => {
        SetCurrentPage(currentPage + number)
    };

    //open describe page
    const handleOpenFullMix = (mix) => {

        return () => {
            dispatch(setMix(mix))
            SetOpenFullMix(true);
        }


    }

    const handleCloseFullMix = () => {
        SetOpenFullMix(false);

    }


    useEffect(() => {
        dispatch(setDeactiveteSide());
        dispatch(setDeactiveteBlender());
    }, [])


    return (
        isFetching ?
            !isEmpty(getFindMixes) ?
                <Mixes totalMixes={getFindMixes}
                    currentMix={currentMix}
                    currentPage={currentPage}
                    mixesPerPage={mixesPerPage}
                    paginate={paginate}
                    openFullMix={openFullMix}
                    handleOpenFullMix={handleOpenFullMix}
                    handleCloseFullMix={handleCloseFullMix}
                ></Mixes>
                : "Not found" : <MainPreloader></MainPreloader>
    )
}

export default MixesContainer