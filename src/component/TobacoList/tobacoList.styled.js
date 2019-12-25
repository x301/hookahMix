import styled from "styled-components"
import { TextELement } from './../../assets/common/texts';

export const TobacoListWrapper = styled.div`
  display: grid;
  grid-area: main;
  grid-template-areas: "Line-Name " "Line-Content ";
  background-color: #ecf0f1;
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
&:hover {
  color: red;
  border-color: #2c3e50;
  };
  &:active {
    border-color: #2c3e50; 
  }
  cursor: pointer;
  border: 1px solid #bdc3c7;
  border-radius: 7px
  
`