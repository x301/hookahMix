import styled from 'styled-components';

export const PreloaderWrapper = styled.div`
display: grid;
background: #34495e;
height: 100%;
width: 100%;
justify-content: center;
align-content: center;
margin: 0;
position: absolute;
z-index: 99;
opacity: .2;

`

export const CircleWrapper = styled.svg`
    position: absolute;
  visibility: hidden;
`

export const DotWrapper = styled.div`
  filter: url(#gooeyness);
  padding: 30px;
`

export const Dot = styled.div`
    background: white;
  border-radius: 50%;
  display: inline-block;
  margin-right: 20px;
  width: 32px;
  height: 32px;

  :first-child {
  animation: FirstDot 3s infinite;
}

:nth-child(2) {
  animation: SecondDot 3s infinite;
}

:nth-child(3) {
  animation: ThirdDot 3s infinite;
}

:nth-child(4) {
  animation: FourthDot 3s infinite;
}

:nth-child(5) {
  animation: FifthDot 3s infinite;
}

  
@keyframes FirstDot {
  0% {
    transform: scale(1) translateX(0);
  }
  25% {
    transform: scale(2.5) translateX(0);
  }
  50% {
    transform: scale(1) translateX(0);
  }
  83% {
    transform: scale(1) translateX(240px);
  }
  100% {
    transform: scale(1) translateX(0);
  }
}

@keyframes SecondDot {
  0% {
    transform: translateX(0px);
  }
  27% {
    transform: translateX(-40px);
  }
  50% {
    transform: translateX(0px);
  }
  81% {
    transform: translateX(180px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes ThirdDot {
  0% {
    transform: translateX(0px);
  }
  29% {
    transform: translateX(-100px);
  }
  50% {
    transform: translateX(0px);
  }
  79% {
    transform: translateX(120px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes FourthDot {
  0% {
    transform: translateX(0px);
  }
  31% {
    transform: translateX(-160px);
  }
  50% {
    transform: translateX(0px);
  }
  77% {
    transform: translateX(60px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes FifthDot {
  0% {
    transform: scale(1) translateX(0);
  }
  33% {
    transform: scale(1) translateX(-220px);
  }
  50% {
    transform: scale(1) translateX(0);
  }
  75% {
    transform: scale(2.5) translateX(0);
  }
  100% {
    transform: scale(1) translateX(0);
  }
}
`