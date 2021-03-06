import styled from "styled-components"

export const MainPageWrapper = styled.div`
  min-height: 100vh;
  background-color: white;
  overflow-x: hidden;
  overflow-y: hidden;
  max-width: 100vw;

  @media ${({ theme }) => theme.device.tablet} {
  display: grid;
  grid-template-columns: 0fr 1fr 0fr;
  grid-template-rows: 0fr 1fr 0fr;
  grid-gap: 1%;
  grid-template-areas: "header header header"
  "sidebar main Blender"
  "footer footer footer";
  }
`