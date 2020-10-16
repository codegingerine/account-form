import styled from "styled-components";
import { media } from "Utils/media";
import gradient from "Assets/svg/gradient.svg";

export const MainStyled = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  padding: 25px 14px 30px;
  overflow: hidden;
  transition: all .2s ease;

  ${media.tablet`
    align-items: flex-start;
    padding: 56px 14px 94px 347px;
  `}

  &:before {
    content: "";
    position: absolute;
    width: 702px;
    height: 649px;
    left: 0;
    top: -111px;
    background-image: url(${gradient});
    background-repeat: no-repeat;
    transition: all .2s ease;
    z-index: -1;

    ${media.tablet`
      width: 660px;
      height: 616px;
      top: 0;
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

export const MainContentStyled = styled.div`
  width: 292px;
  
  ${media.tablet`
    width: calc(256px + 472px);
  `}
`;

export const MainTitle = styled.h1`
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;
  color: #FFFFFF;
  margin-bottom: 28px;
  padding: 0 31px;

  ${media.tablet`
    font-size: 48px;
    line-height: 48px;
    margin: 0 0 48px 256px;
    padding: 0 48px;
  `}
`;
