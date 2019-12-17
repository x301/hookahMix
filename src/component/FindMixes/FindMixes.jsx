import React from "react";
import styled from "styled-components"
import { useHistory } from "react-router-dom"

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
    const handleClick(){
        const getBlender = useSelector(state => state.tobacoList.blender)
        const getFindMixes = firebase
            .functions()
            .httpsCallable('getFindMixes');

        getFindMixes(getBlender)
            .then(function (result) {
                const collections = result;
                console.log(result);
            })
            .catch(function (error) {
                // Getting the Error details.
                var code = error.code;
                var message = error.message;
                var details = error.details;
                // ...
            });
        history.push("/mixes")
    }

    return (
        <FindMixesWrapper><MixesBtn onClick={}>Подобрать миксы</MixesBtn></FindMixesWrapper>
    )
}