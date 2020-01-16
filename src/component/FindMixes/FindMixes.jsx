import React from "react";
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { getMixes } from "../Mixes/mixes-reducer"
import { Button } from './../../assets/common/buttons';


const FindMixesWrapper = styled.div`
position: fixed;
width: 180px;
height: 50px;
left: 50vw;
bottom: 10px;
margin:  0 90px 0 -90px;

`;

const FindMixesBtn = styled(Button)`
background-color:${({ theme }) => theme.secondaryDark};
color: ${({ theme }) => theme.primaryLight};
border: 1px solid ${({ theme }) => theme.secondaryDark};
font-family: "RobotoLight";
box-shadow: 0 0 10px ${({ theme }) => theme.secondaryDark};
font-size: 1.3em;
&:hover {

}
`;


export default () => {
    let history = useHistory()
    const dispatch = useDispatch()
    const getBlender = useSelector(state => state.tobacoListPage.blender);
    const handleClick = () => {
        dispatch(getMixes(getBlender))

        history.push("/mixes")
    }

    return (
        <FindMixesWrapper><FindMixesBtn onClick={handleClick}>Подобрать миксы</FindMixesBtn></FindMixesWrapper>
    )
}