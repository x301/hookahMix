import styled from "styled-components"

export const MainPageWrapper = styled.div`
height: 100vh;
  background-color: white;

  @media ${({ theme }) => theme.device.tablet} {
  display: grid;
  grid-template-columns: 0fr 1fr 0fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1%;
  grid-template-areas: "header header header"
  "sidebar main Blender";
  }
`