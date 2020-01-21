import styled from "styled-components"

export const ProducesrWrapper = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: ${({ theme }) => theme.primaryLight};
  width: 13rem;
  text-align: left;
  padding: .5rem;
  padding-top: 3.5rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ activeSide }) => activeSide ? 'translateX(0)' : 'translateX(-100%)'};

  nav {
      border-bottom: 1px solid ${({ theme }) => theme.secondaryDark};
      a {
          color: ${({ theme }) => theme.secondaryDark} ;
          text-decoration: none;
          font-size: 1.4rem;
          text-transform: uppercase;
          font-family: "RobotoRegular";
          letter-spacing: .2rem;
          transition: color 0.3s linear;
      }


  }

  @media ${({ theme }) => theme.device.tablet} {
    transform: translateX(0);
    position: relative;
    max-width: 20vw;
    
  }
`;