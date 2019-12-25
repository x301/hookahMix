import styled from 'styled-components';

export const StyledHamburger = styled.button`
  position: absolute;
  top: 1%;
  left: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    height: 0.20rem;
    background: ${({ theme, activeSide }) => activeSide ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ activeSide }) => activeSide ? 'translateX(10px) rotate(35deg) ' : 'translateX(0) rotate(0)'};
      width: ${({ activeSide }) => activeSide ? '1.3rem' : '2rem'}
    }

    :nth-child(2) {
      width: ${({ activeSide }) => activeSide ? '1.6rem' : '2rem'}
    }

    :nth-child(3) {
      transform: ${({ activeSide }) => activeSide ? 'rotate(-35deg)' : 'rotate(0)'};
      transform: ${({ activeSide }) => activeSide ? 'translateX(10px) rotate(-35deg) ' : 'translateX(0) rotate(0)'};
      width: ${ ({ activeSide }) => activeSide ? '1.3rem' : '2rem'}
    }
  }


`;