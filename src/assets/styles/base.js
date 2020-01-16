import { styled, createGlobalStyle } from "styled-components"
import { normalize } from 'styled-normalize'
export const GlobalStyle = createGlobalStyle`
  ${normalize}
body {
font-size: 16px;

span {
  padding: 0;
  margin: 0;
}

}
  @font-face {
    font-family: "RobotoBold";
    src: url("./fonts/Roboto-Bold.ttf");
    font-weight: normal;
    font-style: normal;
  };

  @font-face {
    font-family: "RobotoLight";
    src: url("./fonts/Roboto-Light.ttf");
    font-weight: normal;
    font-style: normal;
  };

  @font-face {
    font-family: "RobotoRegular";
    src: url("./fonts/Roboto-Regular.ttf");
    font-weight: normal;
    font-style: normal;
  };

`