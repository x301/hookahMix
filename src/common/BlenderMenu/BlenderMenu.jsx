import React from 'react';
import { BlenderMenuWrapper } from './blenderMenu.styled';
import blenderIconWhite from "../../assets/img/icon-7.png"
import blenderIconBlack from "../../assets/img/icon-6.png"

export default ({ BlenderCount, activeBlender, setActiveBlender }) => {
    return (
        <BlenderMenuWrapper activeBlender={activeBlender} onClick={() => setActiveBlender(!activeBlender)}>
            <div>{BlenderCount ? BlenderCount : ""}</div>
            <img src={activeBlender ? blenderIconBlack : blenderIconWhite}></img>

        </BlenderMenuWrapper>
    )
}
