import styled from "styled-components"

export const TobacoListWrapper = styled.div`
  display: grid;
  grid-area: main;
  grid-template-areas: "Line-Name " "Line-Content ";
  background-color: ${({ theme }) => theme.primaryGrey};
  grid-template-rows: 0fr 0fr;
  min-height: 83vh;
  

`;
export const TobacoElements = styled.div`
    grid-area: Line-Content;
    display: inline-block;
   
`;
export const TobacoProducerName = styled.div`
  font-family: "RobotoBold" "OpenSansBold";
  grid-area: Line-Name;
  font-size: 18pt;
`;

export const TobaccoElementWrapper = styled.div`
display: inline-block;
padding: 1%;
margin-left: 4%;
margin-bottom: 4%;
max-width: 270px;
cursor: pointer;
border: 1px solid #bdc3c7;
border-radius: 7px;
&:hover {
    border-color: ${({ theme }) => theme.primaryHover}; 
  }
  

  @media ${({ theme }) => theme.device.tablet} {
  margin-left: 1em;
  margin-bottom: 1em;
  }

`