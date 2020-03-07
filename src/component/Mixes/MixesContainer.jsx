import React, { useState, useEffect } from "react";
import { Mixes } from './Mixes';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'react-redux-firebase'
import MainPreloader from "../../common/MainPreloader/MainPreloader";
import { setDeactiveteSide } from './../../component/Side/producers-reducer';
import { setDeactiveteBlender } from '../../component/TobacoList/tobacoList-reducer';
import { setMix } from "./DescribeMixes/describe-reducer"
import {getMixes, setFetchingStatus} from "./mixes-reducer";
import { useHistory } from "react-router-dom"


const MixesContainer = () => {
    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.mixesListPage.isFetching);
    const getFindMixes = useSelector(state => state.mixesListPage.mixes);
    const getBlender = useSelector(state => state.tobacoListPage.blender);
    const [currentPage, SetCurrentPage] = useState(1);
    const [mixesPerPage] = useState(6);
    const [openFullMix, SetOpenFullMix] = useState(false);
    //Get current mix
    const indexOfLastMix = currentPage * mixesPerPage;
    const indexOfFirstMix = indexOfLastMix - mixesPerPage;
    const currentMix = !!(getFindMixes) ? getFindMixes.slice(indexOfFirstMix, indexOfLastMix) : "";
    let history=useHistory()
    //Change page
    const paginate = (number) => {
        SetCurrentPage(currentPage + number)
    };

    //open describe page
    const handleOpenFullMix = (mix) => {

        return  async () => {
            const mixName=[];
            const tobacoMix=[['Task', 'Hours per Day']];
             Object.entries(mix).forEach((producerName)=> {
               const tobacoElements=Object.entries(producerName[1]).map(tobacoElem => {
                   tobacoMix.push([producerName[0] + "-" + tobacoElem[0],tobacoElem[1]]);
                   return tobacoElem[0]

               });
                 mixName.push(`${tobacoElements} `)
            });
             await dispatch(setMix(tobacoMix, mixName));
            history.push("/mix")
        }

    };

    const findMixes = async () => {
        await dispatch(setFetchingStatus());
        await dispatch(getMixes(getBlender));
    }

    const handleCloseFullMix = () => {
        SetOpenFullMix(false);

    };


    useEffect(() => {
        dispatch(setDeactiveteSide());
        findMixes()
        dispatch(setDeactiveteBlender());
    }, []);


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
                />
                : "Вкус не найден" : <MainPreloader></MainPreloader>
    )
}

export default MixesContainer