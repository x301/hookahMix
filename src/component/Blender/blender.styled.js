
import styled from "styled-components"

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
    
  span {
    display: inline-block;
    height: 1.2em;
    padding: 0 .5em;
    margin-right: .5em;
    margin-bottom: 1em;
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
  
  }
  @media ${({ theme }) => theme.device.tablet} {
    transform: translateY(0);
    position: relative;
    width: 20vw;
  
}
`;

export const BlenderCounter = styled.div`
padding: .5rem;
width: 80%;
border-bottom: 1px solid black;
p {
  font-size: 1em;
  text-align: left;
  margin: 0;
}


`;