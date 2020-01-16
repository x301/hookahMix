import styled from 'styled-components'

export const PaginatorPages = styled.nav`
 display: flex;
justify-content: center; 
align-items: center;
padding:1%;
ul {
    list-style: none;
    li {
        display: inline;     
       a {
        border: 2px solid #bdc3c7;
        font-size: 1.3rem;
        text-decoration: none;
        color: black;
        padding: .3rem .5rem;
        &:focus{
            border-color: ${({ theme }) => theme.secondaryActive}; 
        };
        &:hover {
        border-color: ${({ theme }) => theme.secondaryHover}; 
        };
       };
    }
}
`