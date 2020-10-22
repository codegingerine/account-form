import styled, { css } from "styled-components";
import { media } from "Utils/media";
import ImageBox from "Components/ImageBox";

export const StepStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 320px;
  padding: 25px 14px 30px;

  ${media.tablet`
    max-width: none;
    align-self: flex-start;
    width: calc(254px + 472px);
    padding: 56px 0 94px;
    left: 167px;
  `}

  ${media.desktop`
    left: 347px;
  `}
`;

export const TitleStyled = styled.h1`
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
  margin-bottom: 28px;
  padding: 0 31px;

  ${media.tablet`
    font-size: 48px;
    line-height: 48px;
    margin: 0 0 50px 254px;
    padding: 0 48px;
  `}
`;

export const StepContentStyled = styled.div`
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
  padding: 16px 15px 72px 15px;


  ${media.tablet`
    padding: 42px 51px 80px 51px;
  `}

  &:before {
    content: "";
    position: absolute;
    top: -1px;
    left: 16px;
    width: 70px;
    height: 2px;
    background: ${({ formBarColor }) =>
      formBarColor ? formBarColor : "#7e4dea"};

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
    margin-bottom: 30px;
  `}
`;

export const ImageBoxStyled = styled(ImageBox)`
  flex-shrink: 0;
`;
