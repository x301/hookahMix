import styled from "styled-components"

export const ProducesrWrapper = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: ${({ theme }) => theme.primaryLight};
  width: 13rem;
  text-align: left;
  padding-top: 3.6rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ activeSide }) => activeSide ? 'translateX(0)' : 'translateX(-100%)'};

  nav {
      border-bottom: 1px solid ${({ theme }) => theme.secondaryDark};
      padding:3% 0 3% 0;
      a {
          color: ${({ theme }) => theme.secondaryDark} ;
          text-decoration: none;
          font-size: 1.6rem;
          padding-left: .5rem;
          font-family: "RobotoBold", "OpenSansBold";
          letter-spacing: .2rem;
          transition: color 0.3s linear;
      }


  }

  @media ${({ theme }) => theme.device.tablet} {
    transform: translateX(0);
    position: relative;
    max-width: 20vw;
    padding-top: 1.4rem;
  }
`;