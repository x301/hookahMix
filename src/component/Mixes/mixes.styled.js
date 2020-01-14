import styled from "styled-components"
import { Button } from '../../assets/common/buttons';

export const MixesPageWrapper = styled.div`

`;

export const MixesWrapper = styled.div`
display: grid;
grid-gap: 1%;
grid-template-columns: 1fr;
background-color: #ecf0f1;
padding: .2rem;
@media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: 1fr 1fr;}
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