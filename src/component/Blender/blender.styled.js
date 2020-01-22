
import styled from "styled-components"
import BlenderContainer from './BlenderContainer';

export const BLenderWrapper = styled.div`
  grid-area: Blender;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: ${({ theme }) => theme.primaryLight};
  text-align: left;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  max-width: 75vw;
  padding: .5em;
  transform: ${({ activeMenu }) => activeMenu ? "translateY(0)" : "translateY(-100%)"}; 
  div {
    padding: .5em;
     
  }
    
  
  @media ${({ theme }) => theme.device.tablet} {
    transform: translateY(0);
    position: relative;
    width: 15vw;
  
}
`;

export const BLenderItems = styled.span`
    font-family: "RobotoRegular" "OpenSansRegular";
    display: inline-block;
    height: 1.2em;
    padding: 0 .5em;
    margin-right: 2%;
    margin-bottom: 5%;
    cursor: pointer;
    border: 1px solid #bdc3c7;
    border-radius: .3em;
    :first-child{
      border-color: transparent;
      font-size: 1.3em;
    }
    &:hover {
    border-color: ${({ theme }) => theme.primaryHover}; 
  }
`

export const BlenderCounterWrapper = styled.div`
padding: .1rem;
width: 80%;
border-bottom: 1px solid black;
span {
  display: inline-block;
  padding: 1%;
  :first-child{
      cursor: pointer;
    }
}
p {
  font-size: 1em;
  text-align: left;
  margin: 0;
}

`;

