import React from 'react';
import { BlenderMenuWrapper } from './blenderMenu.styled';
import blenderIconWhite from "../../assets/img/icon-7.png"
import blenderIconBlack from "../../assets/img/icon-6.png"
import { useSelector, useDispatch } from 'react-redux';
import { setDeactiveteBlender, setActiveBlender } from '../../component/TobacoList/tobacoList-reducer';

export default () => {

    const getBlenderCount = useSelector(state => state.tobacoListPage.blenderCount)
    const getBlenderActiveMenu = useSelector(state => state.tobacoListPage.activeStatus)
    const dispatch = useDispatch()
    return (
        <BlenderMenuWrapper activeBlender={getBlenderActiveMenu} onClick={() => getBlenderActiveMenu ? dispatch(setDeactiveteBlender()) : dispatch(setActiveBlender())}>
            <div>{getBlenderCount ? getBlenderCount : ""}</div>
            <img src={getBlenderActiveMenu ? blenderIconBlack : blenderIconWhite}></img>

        </BlenderMenuWrapper>
    )
}
