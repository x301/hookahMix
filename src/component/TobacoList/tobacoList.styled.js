import styled from "styled-components"
import { TextELement } from './../../assets/common/texts';

export const TobacoListWrapper = styled.div`
  display: grid;
  grid-area: main;
  grid-template-areas: "Line-Name " "Line-Content ";
  background-color: ${({ theme }) => theme.primaryGrey};
  grid-template-rows: 0fr 0fr;

`;
export const TobacoElements = styled.div`
    grid-area: Line-Content;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 130px));
    grid-gap: 15px;
    justify-content: center;
    
    
    
`;
export const TobacoProducerName = styled.div`
  font-family: "RobotoBold";
  grid-area: Line-Name;
  font-size: 18pt;
`;

export const TobaccoElementWrapper = styled.div`
 display: grid;
 align-items: center;
&:hover {
    border-color: ${({ theme }) => theme.primaryHover}; 
  }
  cursor: pointer;
  border: 1px solid #bdc3c7;
  border-radius: 7px

`