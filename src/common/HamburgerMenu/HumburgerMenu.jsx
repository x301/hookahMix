import React from 'react';
import { StyledHamburger } from './HumburgerMenu.styled'
import { useSelector, useDispatch } from "react-redux";
import { setDeactiveteSide, setActiveSide } from './../../component/Side/producers-reducer';

export default () => {
    const getStatusSide = useSelector(state => state.producersPage.activeSide);
    const dispatch = useDispatch();
    return (
        <StyledHamburger activeSide={getStatusSide} onClick={() => getStatusSide ? dispatch(setDeactiveteSide()) : dispatch(setActiveSide())}>
            <div></div>
            <div></div>
            <div></div>
        </StyledHamburger>
    )
}
