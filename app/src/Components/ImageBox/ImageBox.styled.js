import styled from "styled-components";
import { media } from "Utils/media";
import { ReactComponent as Lines } from "Assets/svg/lines.svg";

export const ImageBoxStyled = styled.div`
  display: none;
  position: relative;
  width: 256px;
  min-height: 552px;

  ${media.tablet`
    display: flex;
    justify-content: flex-end;
  `}

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #242424 no-repeat;
    background-image: url(${({ imgSrc }) => imgSrc && imgSrc});
    z-index: -1;
  }
`;

export const LinesStyled = styled(Lines)`
  display: block;
  position: relative;
  width: 244px;
  height: 374px;
  top: 98px;
`;
