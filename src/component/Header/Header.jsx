import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/img/logo-1.svg"
import styled from 'styled-components';

const HeaderWrapper = styled.section`
  display: grid;
  grid-area: header;
  background-color: #40739e;
  justify-content: center;
`

export default () => {
  return (
    <HeaderWrapper className={s.wrapper}>
      <img src={logo}></img>
    </HeaderWrapper>
  );
};


