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
  overflow: hidden;
  transition: all .2s ease;

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
