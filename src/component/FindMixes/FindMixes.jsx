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
bottom: 10px;
margin:  0 90px 0 -90px;

`;




export default () => {
    let history = useHistory()

    const getBlender = useSelector(state => state.tobacoListPage.blender);
    const dispatch = useDispatch()

    const findMixes = async () => {
        await dispatch(setFetchingStatus());
        await dispatch(getMixes(getBlender));
        history.push("/mixes")
    }
    const handleClick = () => {
        findMixes()

    }

    return (
        <FindMixesWrapper><FindMixesBtn onClick={handleClick}>Подобрать миксы</FindMixesBtn></FindMixesWrapper>
    )
}