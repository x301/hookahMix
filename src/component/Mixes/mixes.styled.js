import styled from "styled-components"
import { Button } from '../../assets/common/buttons';

export const MixesPageWrapper = styled.section`
display: grid;
grid-template-rows: 0fr 0fr;
grid-gap: 2%;
background-color: #ecf0f1;
padding: 1%;
header {
    font-size: .9rem;
    text-align: left;
    letter-spacing: .1rem;
    padding: 1%;
    h1{
        margin: 0;
    }
}
strong {
    font-size: 3rem;
    color: red;
}
`;

export const MixesWrapper = styled.div`
display: grid;
grid-gap: 1%;
grid-template-columns: 1fr;

@media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: 1fr 1fr;
    
    }
`;

export const MixesItemWrapper = styled.div`
background-color: ${({ theme }) => theme.primaryLight};


`;


export const TobacoMix = styled.div`


div {
    display:inline-block;
    margin-left: .5rem;
    margin-bottom: .2rem;

    :first-child {
        margin-left: .1rem
    }
}


`;