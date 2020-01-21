import React from "react";
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { getMixes } from "../Mixes/mixes-reducer"
import { FindMixesBtn } from './../../assets/common/buttons';
import { setFetchingStatus } from "../Mixes/mixes-reducer"

const FindMixesWrapper = styled.div`
position: fixed;
width: 180px;
height: 50px;
left: 50vw;
bottom: 3px;
margin:  0 90px 0 -90px;
cursor: pointer;

`;

const debounce = (callback, delay) => {
    let timerId;
    return (...args) => {
        timerId && clearTimeout(timerId);
        timerId = setTimeout(
            () => callback(...args),
            delay
        );
    }
}


export default () => {
    let history = useHistory()

    const getBlender = useSelector(state => state.tobacoListPage.blender);
    const dispatch = useDispatch()
    const findMixes = async () => {
        await dispatch(setFetchingStatus());
        history.push("/mixes")
        await dispatch(getMixes(getBlender));
    }

    const fetchWithDelay = debounce(findMixes, 1000)
    const handleClick = () => {
        fetchWithDelay()

    }

    return (
        <FindMixesWrapper><FindMixesBtn onClick={handleClick}>Подобрать миксы</FindMixesBtn></FindMixesWrapper>
    )
}