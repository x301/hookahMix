import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

const FindMixesWrapper = styled.div`
position: fixed;
width: 125px;
height: 50px;
left: 50%;
bottom: 0px;
margin: auto;

`;

const MixesBtn = styled(Link)`
max-width:100%;
height: auto;
display: block;
margin: 0 auto;
color: black;
`;


export default () => {
    return (
        <FindMixesWrapper><MixesBtn to="/mixes"  >Подобрать миксы</MixesBtn></FindMixesWrapper>
    )
}