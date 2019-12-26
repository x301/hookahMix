import styled from "styled-components"

export const ProducesrWrapper = styled.div`
    grid-area: sidebar;
    display: flex;
  flex-direction: column;
  justify-content: start;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 1rem;
  padding-top: 2.4rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ activeSide }) => activeSide ? 'translateX(0)' : 'translateX(-100%)'};

  nav {
      border-bottom: 1px solid ${({ theme }) => theme.secondaryDark} 
      a {
          color: ${({ theme }) => theme.secondaryDark} ;
          text-decoration: none;
          font-size: 1.5rem;
          text-transform: uppercase;
          font-family: "RobotoRegular";
          letter-spacing: .3rem;
          transition: color 0.3s linear;
      }


  }
`;