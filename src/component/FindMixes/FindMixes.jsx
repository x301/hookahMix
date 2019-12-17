import React from "react";
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { getMixes } from "../Mixes/mixes-reducer"


const FindMixesWrapper = styled.div`
position: fixed;
width: 125px;
height: 50px;
left: 50%;
bottom: 0px;
margin: auto;

`;

const MixesBtn = styled.button`
max-width:100%;
height: auto;
display: block;
margin: 0 auto;
color: black;
`;


export default () => {
    let history = useHistory()
    const dispatch = useDispatch()
    const getBlender = useSelector(state => state.tobacoListPage.blender)
    const handleClick = () => {
        dispatch(getMixes(getBlender))

        history.push("/mixes")
    }

    return (
        <FindMixesWrapper><MixesBtn onClick={handleClick}>Подобрать миксы</MixesBtn></FindMixesWrapper>
    )
}