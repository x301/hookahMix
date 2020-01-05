import React from "react";
import { Mixes } from './Mixes';
import { useSelector } from 'react-redux';

import { isEmpty, isLoaded } from 'react-redux-firebase'


const MixesContainer = () => {
    const getFindMixes = useSelector(state => state.mixesListPage.mixes)
    return (
        !isEmpty(getFindMixes) ?
            isLoaded(getFindMixes) ? <Mixes mixes={getFindMixes}></Mixes> : "Mixes not found"
            : "Not found"

    )
}

export default MixesContainer