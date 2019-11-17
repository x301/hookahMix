import styled from "styled-components" 

export const TobacoListWrapper = styled.div`
  display: grid;
  grid-area: main;
  grid-template-areas: "Line-Name " "Line-Content ";
  background-color: aquamarine;
  grid-template-rows: 0fr 0fr;
`;
export const TobacoElements=styled.div`
    grid-area: Line-Content;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 130px));
    grid-gap: 15px;
`;
export const TobacoProducerName=styled.div`
  display: grid;
  grid-area: Line-Name;
  font-size: 18pt;
`;