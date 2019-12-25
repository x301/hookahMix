import React from 'react';
import { StyledHamburger } from './HumburgerMenu.styled'

export default ({ activeSide, setActiveSide }) => {

    return (
        <StyledHamburger activeSide={activeSide} onClick={() => setActiveSide(!activeSide)}>
            <div></div>
            <div></div>
            <div></div>
        </StyledHamburger>
    )
}