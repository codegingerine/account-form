import styled from "styled-components";
import { media } from "Utils/media";
import gradient from "Assets/svg/gradient.svg";

export const MainStyled = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  padding: 25px 14px 30px;
  overflow: hidden;
  transition: all .2s ease;

  ${media.desktop`
    align-content: flex-start;
    padding: 56px 14px 94px 347px;
  `}

  &:before {
    content: "";
    position: absolute;
    width: 702px;
    height: 649px;
    left: -66px;
    top: -111px;
    background-image: url(${gradient});
    background-repeat: no-repeat;
    transition: all .2s ease;
    z-index: -1;

    ${media.desktop`
      width: 660.86px;
      height: 616.33px;
      top: 0;
      left: -54px;
    `}
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #242424;
    z-index: -2;
  }
`;

export const MainTitle = styled.h1`
  font-weight: 300;
  font-size: 36.0347px;
  line-height: 42px;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 28px;

  ${media.desktop`
    font-size: 48.0463px;
    line-height: 48px;
    margin: 0 0 48px 256px;
  `}
`;
