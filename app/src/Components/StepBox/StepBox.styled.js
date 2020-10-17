import styled, { css } from "styled-components";
import { media } from "Utils/media";
import ImageBox from "Components/ImageBox";

export const StepBoxStyled = styled.section`
  display: flex;
`;

export const FormBoxStyled = styled.div`
  flex-grow: 1;
  position: relative;
  background: linear-gradient(
      5.88deg,
      rgba(165, 165, 180, 0.15) 4.19%,
      rgba(228, 235, 239, 0.15) 95.81%,
      rgba(231, 232, 238, 0.15) 95.81%,
      rgba(231, 232, 238, 0.15) 95.81%
    ),
    #fcfcfd;
  padding: 16px 15px;

  ${media.tablet`
    padding: 42px 50px;
  `}

  &:before {
    content: "";
    position: absolute;
    top: -1px;
    left: 16px;
    width: 70px;
    height: 2px;
    background: ${({ formBarColor }) => formBarColor ? formBarColor : "#7e4dea"};

    ${media.tablet`
      left: 51px;
    `}
  }
`;

export const FormIntroStyled = styled.div`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.3px;
  color: #202020;
  margin-bottom: 30px;

  ${media.tablet`
    width: 322px;
    margin-bottom: 56px;
  `}
`;

export const ImageBoxStyled = styled(ImageBox)`
  flex-shrink: 0;
`;
