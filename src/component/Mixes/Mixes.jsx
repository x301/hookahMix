import React from "react";
import { MixesWrapper, MixesPageWrapper, MixesItemWrapper, TobacoMix } from "./mixes.styled";

import Paginator from "../../common/Paginator/Paginator";
import PropTypes from 'prop-types';
import DesctibeMixes from "./DescribeMixes/DescribeMixes"

export const Mixes = ({ totalMixes, currentMix, mixesPerPage, paginate, currentPage, openFullMix, handleOpenFullMix, handleCloseFullMix }) => {
    const findedMixes = currentMix.map((mix, i) => {
        let tobacoElement = [];
        let mixTittle = [];


        const miElement = Object.entries(mix).map((name, i) => {
            const ElementInTobacoMix = Object.entries(name[1]).map((e, i) => {
                return <span key={i}>{`${e[0]}, `}</span>
                // tobacoElement.push(<div>{`${name[0]}: ${e[0]}`, e[1]}</div>)
                // mixTittle.push(e[0])
            })
            return <TobacoMix key={i}>{`${name[0]}: `}{ElementInTobacoMix}</TobacoMix>

        })
        return <MixesItemWrapper key={i} onClick={handleOpenFullMix(currentMix[i])}>
            {miElement}


        </MixesItemWrapper>
    })

    return (
        openFullMix ? <DesctibeMixes handleCloseFullMix={handleCloseFullMix} ></DesctibeMixes> : <MixesPageWrapper>
            <header><h1><strong>{`${totalMixes.length}`}</strong>{`: найденных миксов`}</h1></header>
            <MixesWrapper>{findedMixes}</MixesWrapper>
            <Paginator totalMixes={totalMixes.length}
                mixesPerPage={mixesPerPage}
                currentPage={currentPage}
                paginate={paginate}></Paginator>
        </MixesPageWrapper>
    )
}

Mixes.propTypes = {
    totalMixes: PropTypes.array,
    currentMix: PropTypes.array,
    mixesPerPage: PropTypes.number,
    paginate: PropTypes.func,
    currentPage: PropTypes.number
}